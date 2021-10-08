using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models.Repository_Models
{
    public interface ICeramicRepository
    {
        Ceramic GetBy(int id);
        IEnumerable<Ceramic> GetAll();
        void Add(Ceramic keramiek);
        void Delete(Ceramic keramiek);
        void Update(Ceramic keramiek);
        void SaveChanges();
    }
}
