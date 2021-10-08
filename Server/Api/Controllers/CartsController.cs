using Api.DTOs;
using Api.Models;
using Api.Models.Repository_Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;
        private readonly ICeramicRepository _ceramicsRepository;

        public CartsController(ICartRepository cartRepository, ICeramicRepository ceramicRepository)
        {
            _ceramicsRepository = ceramicRepository;
            _cartRepository = cartRepository;
        }

        // GET: api/Cart
        /// <summary>
        ///  Get all the cart objects
        /// </summary>
        /// <returns>Cart objects</returns>
        /// <returns>All Carts</returns>
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Cart> GetAllCarts()
        {
            return _cartRepository.GetAll();
        }

        // GET: api/Cart/2
        /// <summary>
        ///  Gets the Cart object with given id
        /// </summary>
        /// <param name="id">the id of the Cart</param>
        /// <returns>Get Cart object</returns>
        [HttpGet("{id}")]
        [AllowAnonymous]
        public ActionResult<Cart> GetCart(int id)
        {
            Cart cart = _cartRepository.GetBy(id);
            if (cart == null)
                return NotFound();
            else
                return cart;
        }


        /// <summary>
        ///  Adds a new Cart
        /// </summary>
        /// <param name="cart">Post ceramic object</param>
        [HttpPost]
        [AllowAnonymous]
        public ActionResult<Cart> PostCart(CartDTO cart)
        {
            Ceramic c = _ceramicsRepository.GetBy(cart.Id);

            Cart cartToCreate
                = new Cart()
                {
                    Name = c.Name,
                    Price = c.Price,
                    Qty = cart.Qty
                };
            _cartRepository.Add(cartToCreate);
            _cartRepository.SaveChanges();

            return CreatedAtAction(nameof(GetCart), new { Id = cart.Id}, cart);

        }

        /// <summary>
        ///  Deletes a Cart with given id
        /// </summary>
        /// <param name="id">the id of the Cart</param>
        /// <returns>No Content</returns>
        /// <param>Deletes Cart object</param>
        [HttpDelete("{id}")]
        [AllowAnonymous]
        public ActionResult<Cart> DeleteCart(int id)
        {
            Cart cart = _cartRepository.GetBy(id);
            if (cart == null)
                return NotFound();
            else
            _cartRepository.Delete(cart);
            _cartRepository.SaveChanges();
            return NoContent();
        }

    }
}
