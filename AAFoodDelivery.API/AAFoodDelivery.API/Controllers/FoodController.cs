using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AAFoodDelivery.API.Data;
using AAFoodDelivery.API.Models;

namespace AAFoodDelivery.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FoodController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FoodItem>>> GetFoods()
        {
            return await _context.FoodItems.ToListAsync();
        }
    }
}