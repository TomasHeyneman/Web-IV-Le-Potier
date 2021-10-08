using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using Api.Models.Repository_Models;

namespace Api.Data.Repositories
{
    public class CeramicRepository : ICeramicRepository
    {

        private readonly CeramicContext _context;
        private readonly DbSet<Ceramic> _ceramics;


        public CeramicRepository(CeramicContext context)
        {
            _context = context;
            _ceramics = context.Ceramics;
        }

        public IEnumerable<Ceramic> GetAll()
        {
            return _ceramics.OrderBy(t => t.Name).ToList();
        }

        public Ceramic GetBy(int id)
        {
            return _ceramics.FirstOrDefault(t => t.Id == id);
        }

        public void Add(Ceramic ceramic)
        {
            _context.Add(ceramic);
        }

        public void Delete(Ceramic ceramic)
        {
            _context.Remove(ceramic);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Update(Ceramic ceramic)
        {
            _context.Update(ceramic);
        }

      
    }
}
