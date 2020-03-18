using System;
using System.Collections.Generic;

namespace Fluke.WebApi.Models
{
    public class GeometriesModel
    {
        public DateTime Date { get; set; }
        public string Type { get; set; }
        public List<decimal> Coordinates;

        public GeometriesModel()
        {
            this.Coordinates = new List<decimal>();
        }
    }
}
