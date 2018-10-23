using System;
using System.Collections.Generic;
namespace AspNet.Models
{
    public class Collection
    {
        public int CollectionId { get; set; }
        public string Name { get; set; }
        public int Collected { get; set; }
        public int Total { get; set; }
        public bool Active { get; set; }
        public List<Item> Items { get; set; }
    }
}
