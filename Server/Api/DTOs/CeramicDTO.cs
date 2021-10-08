using Api.DTOs;
using Api.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Keramiek.DTOs
{
    public class CeramicDTO
    {
        [Required]

        public int Id { get;  set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public string Description { get; set; }

        public string Color { get; set; }

    }
}
