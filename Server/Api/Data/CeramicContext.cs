using Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data
{
    public class CeramicContext : IdentityDbContext
    {
        public CeramicContext(DbContextOptions<CeramicContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Ceramic>()
                .HasMany(t => t.Carts)
                .WithOne()
                .HasForeignKey("CeramicId");


            builder.Entity<Ceramic>().Property(t => t.Id).IsRequired().HasMaxLength(30);
            builder.Entity<Ceramic>().Property(t => t.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Ceramic>().Property(t => t.Description).IsRequired().HasMaxLength(50);
            builder.Entity<Ceramic>().Property(t => t.Price).IsRequired();


            
            builder.Entity<Customer>().Property(c => c.LastName).IsRequired().HasMaxLength(50);
            builder.Entity<Customer>().Property(c => c.FirstName).IsRequired().HasMaxLength(50);
            builder.Entity<Customer>().Property(c => c.Email).IsRequired().HasMaxLength(100);
            /* builder.Entity<Customer>().Ignore(c => c.FavoriteCeramics);
            builder.Entity<Customer>().Ignore(c => c.Ceramics);*/



            /* builder.Entity<CustomerFavorite>().HasKey(f => new { f.CustomerId, f.CeramicId });
             builder.Entity<CustomerFavorite>().HasOne(f => f.Customer).WithMany(u => u.FCeramics).HasForeignKey(f => f.CustomerId);
             builder.Entity<CustomerFavorite>().HasOne(f => f.Ceramic).WithMany().HasForeignKey(f => f.CeramicId);*/


            /* builder.Entity<Customer>().HasKey(f => f.CustomerId);
             builder.Entity<Customer>().HasMany(t => t.Ceramics).WithOne().HasForeignKey(t => t.CustomerId).OnDelete(DeleteBehavior.Cascade);*/

            builder.Entity<Customer>().HasData(
                new
                {
                    CustomerId = 1,
                    FirstName="Tomas",
                    LastName="Heyneman",
                    Email = "tomasH@hogent.be"
                },
                new
                {
                    CustomerId = 2,
                    FirstName = "Tom",
                    LastName = "Master",
                    Email = "ceramicmaster@hogent.be"
                }
                );



           builder.Entity<Cart>().HasData(
                   new
                   {
                       Id = 1,
                       Qty = 1,
                       Name = "Blauwe Vaas",
                       Price = 60.0,
                       CeramicId = 1,
                       
                   },
                    new
                    {
                        Id = 2,
                        Qty = 1,
                        Name = "Kom 1",
                        Price = 40.0,
                        CeramicId = 1,
                    },
                    new
                    {
                        Id = 3,
                        Qty = 1,
                        Name = "Kom 2",
                        Price = 60.0,
                        CeramicId = 1,
                    },
                    new
                    {
                        Id = 4,
                        Qty = 1,
                        Name = "Blauwe Vaas",
                        Price = 60.0,
                        CeramicId = 1,
                    }
            ); 

            builder.Entity<Ceramic>().HasData(
                 new
                 {
                     Id = 1,
                     Name = "Kom 1",
                     Price = 40.0,
                     Description = "Beschrijving Keramiek 1",
                     ImageUrl = "Kom_1.jpeg",
                     Color = "Appelblauwzeegroen",
                     Owner = "ceramicmaster@hogent.be",
                     CustomerId = 2

                 },
                 new
                 {
                     Id = 2,
                     Name = "Kom 2",
                     Price = 40.0,
                     Description = "Beschrijving Keramiek 2",
                     ImageUrl = "Kom_2.jpeg",
                     Color = "Blauw",
                     Owner = "ceramicmaster@hogent.be",
                     CustomerId = 2

                 },
                new
                {
                    Id = 3,
                    Name = "Mok 1",
                    Price = 20.0,
                    Description = "Beschrijving Keramiek 3",
                    ImageUrl = "Mok_1.jpeg",
                    Color = "Blauw",
                    Owner = "ceramicmaster@hogent.be",
                    CustomerId = 2

                },
                 new
                 {
                     Id = 4,
                     Name = "Mooie witte mokken",
                     Price = 80.0,
                     Description = "Beschrijving Keramiek 4",
                     ImageUrl = "Witte_Mokken.jpeg",
                     Color = "Wit",
                     Owner = "ceramicmaster@hogent.be",
                     CustomerId = 2


                 },
                  new
                  {
                      Id = 5,
                      Name = "Vaas",
                      Price = 40.0,
                      Description = "Beschrijving Keramiek 5",
                      ImageUrl = "blauwe vaas.jpeg",
                      Color = "Blauw",
                      Owner = "ceramicmaster@hogent.be",
                      CustomerId = 2

                  },
                   new
                   {
                       Id = 6,
                       Name = "Schaal 1",
                       Price = 80.0,
                       Description = "Beschrijving Keramiek 6",
                       ImageUrl = "Schaal(1)_2.png",
                       Color = "Groen",
                       Owner = "ceramicmaster@hogent.be",
                       CustomerId = 1

                   },
                    new
                    {
                        Id = 7,
                        Name = "Mok 2",
                        Price = 100.0,
                        Description = "Beschrijving Keramiek 7",
                        ImageUrl = "Mok_2.jpeg",
                        Color = "Zwart",
                        Owner = "ceramicmaster@hogent.be",
                        CustomerId = 1

                    },
                     new
                     {
                         Id = 8,
                         Name = "Pot 1",
                         Price = 20.0,
                         Description = "Beschrijving Keramiek 8",
                         ImageUrl = "Pot_1.jpeg",
                         Color = "Wit",
                         Owner = "ceramicmaster@hogent.be",
                         CustomerId = 1

                     },
                      new
                      {
                          Id = 9,
                          Name = "Schaal met Salamander",
                          Price = 40.0,
                          Description = "Beschrijving Keramiek 9",
                          ImageUrl = "Gekko_Schaal.jpeg",
                          Color = "Zwart en wit",
                          Owner = "ceramicmaster@hogent.be",
                          CustomerId = 1

                      },
                       new
                       {
                           Id = 10,
                           Name = "Bruinachtige Vaas",
                           Price = 60.0,
                           Description = "Beschrijving Keramiek 10",
                           ImageUrl = "Speciale_Vaas.jpeg",
                           Color = "Bruin",
                           Owner = "ceramicmaster@hogent.be",
                           CustomerId = 1

                       },
                        new
                        {
                            Id = 11,
                            Name = "Blauwe Vaas",
                            Price = 60.0,
                            Description = "Beschrijving Keramiek 10",
                            ImageUrl = "Blauwe_Vaas.jpeg",
                            Color = "Blauw",
                            Owner = "ceramicmaster@hogent.be",
                            CustomerId = 1

                        },
                         new
                         {
                             Id = 12,
                             Name = "Oranje Vaas",
                             Price = 60.0,
                             Description = "Beschrijving Keramiek 10",
                             ImageUrl = "Oranje_Vaas.jpeg",
                             Color = "Oranje",
                             Owner = "ceramicmaster@hogent.be",
                             CustomerId = 1
                         }

             );
           
        }

        public DbSet<Ceramic> Ceramics { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Customer> Customers { get; set; }
      
    }
  
    }
