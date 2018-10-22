using System;
using AspNet.Models;
using Microsoft.EntityFrameworkCore;

namespace AspNet.Contexts
{
    public class MySqlContext :DbContext
    {
        public MySqlContext(DbContextOptions<MySqlContext> options)
        : base(options)
        {
        }
        public DbSet<AspNet.Models.Collection> Collections { get; set; }
        public DbSet<AspNet.Models.Item> Items { get; set; }
    }

}