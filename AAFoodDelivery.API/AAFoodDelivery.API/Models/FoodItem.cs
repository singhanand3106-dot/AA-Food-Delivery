using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AAFoodDelivery.API.Models
{
    public class FoodItem
    {
        [Key]
        public int FoodId { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public string? Description { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }

        public string? ImageUrl { get; set; }

        public string Category { get; set; } = string.Empty;

        public bool IsAvailable { get; set; } = true;
    }
}