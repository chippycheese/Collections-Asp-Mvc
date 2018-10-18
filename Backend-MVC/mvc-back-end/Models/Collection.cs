using System;
namespace mvcbackend.Models
{
    public class Collection
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Collected { get; set; }
        public int Total { get; set; }
        public decimal Price { get; set; }
    }
}
