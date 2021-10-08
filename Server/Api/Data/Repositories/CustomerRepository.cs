using Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {

        private readonly CeramicContext _context;
        private readonly DbSet<Customer> _customers;


        public CustomerRepository(CeramicContext dbContext)
        {
            _context = dbContext;
            _customers = dbContext.Customers;
        }


        public Customer GetBy(string email)
        {
            return _customers.Include(c => c.Ceramics).SingleOrDefault(c => c.Email == email);
        }

        public void Add(Customer customer)
        {
            _customers.Add(customer);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
