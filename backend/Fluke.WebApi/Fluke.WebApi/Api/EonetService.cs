using Fluke.WebApi.Models;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Fluke.WebApi.Api
{
    public  class EonetService: IEonetService
    {       
        //configuration object
        public IConfiguration _configuration { get; }

        public EonetService(IConfiguration configuration)
        {
            //depency injection
            this._configuration = configuration;
        }

        public  async Task<List<EnoetEventsModel>> GetEventsAsync(int? limit)
        { 
            var endPoint = $"{this._configuration.GetValue<string>("EonetEndPoint")}?limit={limit ?? 25}";

            using (var client = new HttpClient())
            {
                //Open
                var response = await client.GetAsync(endPoint);
                var responseBody = response.Content.ReadAsStringAsync();
                //Convert to Object
                var openEnoet = JsonConvert.DeserializeObject<EonetModel>(responseBody.Result);

                //Closed
                var responseClosed = await client.GetAsync($"{endPoint}&status=closed");
                var responseBodyClosed = responseClosed.Content.ReadAsStringAsync();
                //Convert to Object
                var closedEnoet = JsonConvert.DeserializeObject<EonetModel>(responseBodyClosed.Result);

                var result = new List<EnoetEventsModel>();
                result.AddRange(openEnoet.Events);
                result.AddRange(closedEnoet.Events);
                
                return result;
            }
        }
    }
}
