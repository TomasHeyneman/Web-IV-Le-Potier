using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public interface ICartRepository
    {
        Cart GetBy(int id);
        IEnumerable<Cart> GetAll();
        void Add(Cart cart);
        void Delete(Cart cart);
        void Update(Cart cart);
        void SaveChanges();
    }
}
