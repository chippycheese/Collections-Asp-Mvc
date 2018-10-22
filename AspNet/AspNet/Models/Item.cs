using System;
namespace AspNet.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public bool Collected { get; set; }
        public bool Active { get; set;  }
        public int CollectionId { get; set; }
    }
}
