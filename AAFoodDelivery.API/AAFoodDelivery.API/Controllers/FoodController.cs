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
        
        [HttpPost]
        public async Task<ActionResult<FoodItem>> AddFood(FoodItem food)
        {
            _context.FoodItems.Add(food);
            await _context.SaveChangesAsync();

            return Ok(food);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFood(int id, FoodItem food)
        {
            if (id != food.FoodId)
            {
                return BadRequest();
            }

            _context.Entry(food).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFood(int id)
        {
            var food = await _context.FoodItems.FindAsync(id);

            if (food == null)
            {
                return NotFound();
            }

            _context.FoodItems.Remove(food);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}