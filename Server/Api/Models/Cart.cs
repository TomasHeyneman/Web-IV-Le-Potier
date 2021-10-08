using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Cart
    {

        public int Id { get; set; }

        public int Qty { get; set; }

        public Ceramic Ceramic { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public Cart(  )
        { 
            Qty = 1;  
        }

    }

    

    //public int CeramicId { get; set; }

    //public string ceramicName { get; set; }
}
