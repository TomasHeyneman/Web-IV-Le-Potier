using Api.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Data
{
    public class CeramicDataInitializer
    {
        private readonly CeramicContext _ceramicContext;
        private readonly UserManager<IdentityUser> _userManager;

        public CeramicDataInitializer(CeramicContext context, UserManager<IdentityUser> userManager)
        {
            _ceramicContext = context;
            _userManager = userManager;
        }

        public async Task InitializeData()
        {
            _ceramicContext.Database.EnsureDeleted();
            if (_ceramicContext.Database.EnsureCreated())
            {
                //Seed data in context
                Customer master = new Customer { Email = "ceramicmaster@hogent.be", FirstName = "Tom", LastName = "Master" };
               // _ceramicContext.Customers.Add(master);
                await CreateUser(master.Email, "P@ssword1111");
                Customer student = new Customer { Email = "tomasH@hogent.be", FirstName = "Tomas", LastName = "Heyneman" };
                //_ceramicContext.Customers.Add(student);
                // student.AddFavoriteCeramic(_ceramicContext.Ceramics.First());
                await CreateUser(student.Email, "P@ssword4321");
                _ceramicContext.SaveChanges();
            }
        }
        private async Task CreateUser(string email, string password)
        {
            var user = new IdentityUser { UserName = email, Email = email };
            await _userManager.CreateAsync(user, password);
        }
    }
}
