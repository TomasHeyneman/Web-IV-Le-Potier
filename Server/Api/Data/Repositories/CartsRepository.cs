using Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Repositories
{
    public class CartsRepository : ICartRepository
    {

        private readonly CeramicContext _context;
        private readonly DbSet<Cart> _carts;

        public CartsRepository(CeramicContext context)
        {
            _context = context;
            _carts = context.Carts;
        }

        public IEnumerable<Cart> GetAll()
        {
            return _carts.OrderBy(t => t.Id).ToList();
        }

        public void Add(Cart cart)
        {
            _context.Add(cart);
        }

        public void Delete(Cart cart)
        {
            _context.Remove(cart);
        }

        public void Update(Cart cart)
        {
            _context.Update(cart);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Cart GetBy(int id)
        {
            return _carts.FirstOrDefault(t => t.Id == id);
        }

       
    }
}
