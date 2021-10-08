using Api.Models;
using Api.Models.Repository_Models;
using Keramiek.DTOs;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [AllowAnonymous]
    public class CeramicsController : ControllerBase
    {

        private readonly ICeramicRepository _ceramicRepository;
        private readonly ICustomerRepository _customerRepository;

        public CeramicsController(ICeramicRepository ceramicRepository, ICustomerRepository customerRepository)
        {
            _ceramicRepository = ceramicRepository;
            _customerRepository = customerRepository;
        }


  
        // GET: api/Ceramic
        /// <summary>
        ///  Get all the ceramic objects
        /// </summary>
        /// <returns>Ceramic objects</returns>
        /// <returns>All ceramics</returns>
        [HttpGet]
       
        public IEnumerable<Ceramic> GetAllCeramics()
        {
            return _ceramicRepository.GetAll();
        }

        /*/// <summary>
        /// Get favorite recipes of current user
        /// </summary>
        [HttpGet("Favorites")]
        public IEnumerable<Ceramic> GetFavorites()
        {
            Customer customer = _customerRepository.GetBy(User.Identity.Name);
            return customer.FavoriteCeramics;
        }*/

        // GET: api/Ceramic/2
        /// <summary>
        ///  Gets the ceramic object with given id
        /// </summary>
        /// <param name="id">the id of the ceramic</param>
        /// <returns>Get ceramic object</returns>
        [HttpGet("{id}")]
        [AllowAnonymous]
        public ActionResult<Ceramic> GetCeramic(int id)
        {
            Ceramic ceramic = _ceramicRepository.GetBy(id);
            if (ceramic == null)
                return NotFound();
            else
                return ceramic;
        }

        //Voor admin (later authorize toevoegen)
        /// <summary>
        ///  Adds a new Ceramic
        /// </summary>
        /// <param name="ceramic">Post ceramic object</param>
        [HttpPost]
        public ActionResult<Ceramic> PostCeramic(CeramicDTO ceramic)
        {

            Customer c = _customerRepository.GetBy(User.Identity.Name);
            Ceramic ceramicToCreate
                = new Ceramic()
                {

                    Name = ceramic.Name,
                    Description = ceramic.Description,
                    Price = ceramic.Price,
                    Color = ceramic.Color,
                    Owner = c.Email,
                    CustomerId = c.CustomerId
                };
            _ceramicRepository.Add(ceramicToCreate);
            _ceramicRepository.SaveChanges();

            return CreatedAtAction(nameof(GetCeramic), new { id = ceramicToCreate.Id }, ceramicToCreate);

        }

        /// <summary>
        ///  Deletes a ceramic with given id
        /// </summary>
        /// <param name="id">the id of the ceramic</param>
        /// <returns>No Content</returns>
        /// <param>Delets ceramic object</param>
        //Admin
        [HttpDelete("{id}")]
        public ActionResult<Ceramic> DeleteCeramic(int id)
        {
            Ceramic ceramic = _ceramicRepository.GetBy(id);
            if (ceramic == null)
                return NotFound();
            else
                _ceramicRepository.Delete(ceramic);
                _ceramicRepository.SaveChanges();
            return NoContent();
        }


        // PUT: api/Ceramic/2
        ///<summary>
        ///  Modifies a Ceramic
        /// </summary>
        /// <param name="id"> the id of the ceramic to be modified</param>
        [HttpPut("{id}")]
        public IActionResult PutCeramic(int id, Ceramic ceramic)
        {
            if (id != ceramic.Id)
            {
                return BadRequest();
            }
            _ceramicRepository.Update(ceramic);
            _ceramicRepository.SaveChanges();
            return NoContent();
        }
    }
}
