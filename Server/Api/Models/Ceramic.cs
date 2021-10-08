using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace Api.Models
{
    public class Ceramic
    {
        #region Properties
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public double Price{ get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public string Color { get; set; }

        public string Owner { get; set; }

        public ICollection<Cart> Carts { get; set; }

        public int CustomerId { get; set; }

        #endregion

        #region Constructors

        public Ceramic()
        {
            Carts = new List<Cart>();
        }


        public Ceramic(string name, string description, double price, string imageUrl, string color)
        {
            Name = name;
            Description = description;
            Price = price;
            Color = color;
            ImageUrl = imageUrl;
        }
        #endregion

    }
}
