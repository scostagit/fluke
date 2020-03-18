using Fluke.WebApi.Api;
using Fluke.WebApi.Models;
using Fluke.WebApi.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fluke.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EonetController : Controller
    {      

        //Events
        public List<EnoetEventsModel> _events = default(List<EnoetEventsModel>);

        //Api Service
        private readonly IEonetService _eonetService = default(IEonetService);

        //parameter will be provider by Dependecy Injection
        public EonetController(IEonetService eonetService)
        {            
            this._eonetService = eonetService;
        }

        [HttpGet]
        public async Task<JsonResult> Get(string searchString, string sortOrder, string status, int? limit, int? pageNumber)
        {
            this._events = await this._eonetService.GetEventsAsync(limit);

            var results = from eonetEvent in _events
                          select eonetEvent;

            if (!string.IsNullOrEmpty(searchString))
            {
                results = results.Where(e => e.Title.Contains(searchString) ||
                                             e.ID.Contains(searchString) ||
                                             e.Categories.Any(c => c.Title.Contains(searchString)) ||
                                             e.Geometries.Any(g => g.Type.Contains(searchString)));
            }

            if(!string.IsNullOrEmpty(status))
            {
                results = results.Where(e => e.Status.Equals(status));
            }

            switch (sortOrder)
            {
                case "title_desc":
                    results = results.OrderByDescending(e => e.Title);
                    break;
                case "title":
                    results = results.OrderBy(e => e.Title);
                    break;
                case "id":
                    results = results.OrderBy(e => e.ID);
                    break;
                case "id_desc":
                    results = results.OrderByDescending(e => e.ID);
                    break;
                default:
                    break;
            }      

            //serilaze json
            return Json(PaginatedList<EnoetEventsModel>.Create(results, pageNumber?? 1, limit?? 20));            
        }
    }
}
