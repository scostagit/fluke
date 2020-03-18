using System.Collections.Generic;

namespace Fluke.WebApi.Models
{
    public class EonetModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }

        public List<EnoetEventsModel> Events;

        public EonetModel()
        {
            this.Events = new List<EnoetEventsModel>();
        }
    }
}
