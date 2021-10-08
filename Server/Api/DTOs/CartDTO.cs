using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.DTOs
{
    public class CartDTO
    {


        public int Id { get; set; }

        public string Name { get; set; }

        public int Qty { get; set; }

    }
}
