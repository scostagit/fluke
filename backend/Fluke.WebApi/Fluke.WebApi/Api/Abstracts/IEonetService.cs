using Fluke.WebApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Fluke.WebApi.Api
{
    public interface IEonetService
    {
        Task<List<EnoetEventsModel>> GetEventsAsync( int? limit);
    }
}
