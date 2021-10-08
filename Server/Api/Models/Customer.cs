using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Customer
    {
        #region Properties
        //add extra properties if needed
        public int CustomerId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public ICollection<Ceramic> Ceramics{ get; private set; }
        #endregion

        #region Constructors
        public Customer()
        {
             Ceramics = new List<Ceramic>();
        }
        #endregion

        #region Methods
      
        #endregion
    }
}
