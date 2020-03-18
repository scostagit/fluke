using System;
using System.Collections.Generic;

namespace Fluke.WebApi.Models
{
    public class EnoetEventsModel
    {
        public string ID { get; set; }
        public string Title { get; set; }
        public string Descreption { get; set; }
        public string Link { get; set; }
        public DateTime? Closed { get; set; }
        public List<CategoriesModel> Categories;
        public List<SourcesModel> Sources;
        public List<GeometriesModel> Geometries;
        public string Status { get { return this.Closed.HasValue ? "closed" : "open"; } }

        public EnoetEventsModel()
        {
            this.Categories = new List<CategoriesModel>();
            this.Sources = new List<SourcesModel>();
            this.Geometries = new List<GeometriesModel>();
        }
    }
}
