using Api.Models;
using System.Collections.Generic;

namespace Api.DTOs
{
    public class CustomerDTO
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public IEnumerable<Ceramic> Ceramics { get; set; }

        public CustomerDTO() { }

        public CustomerDTO(Customer customer) : this()
        {
            FirstName = customer.FirstName;
            LastName = customer.LastName;
            Email = customer.Email;
            Ceramics = customer.Ceramics;
        }
    }
}
