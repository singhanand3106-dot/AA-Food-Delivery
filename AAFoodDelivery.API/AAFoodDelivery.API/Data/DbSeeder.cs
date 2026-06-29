using AAFoodDelivery.API.Models;

namespace AAFoodDelivery.API.Data
{
    public static class DbSeeder
    {
        public static void Seed(AppDbContext context)
        {
            Console.WriteLine("DbSeeder is running...");
            if (context.FoodItems.Any())
                return;

            context.FoodItems.AddRange(

                new FoodItem
                {
                    Name = "Chicken Biryani Special",
                    Description = "Hyderabadi Dum Biryani with Extra Masala",
                    Price = 349,
                    ImageUrl = "Chicken-Biryani.jpg",
                    Category = "Biryani",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Mutton Biryani",
                    Description = "Spicy Mutton Biryani",
                    Price = 449,
                    ImageUrl = "Mutton-Biryani.jpg",
                    Category = "Biryani",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Veg Biryani",
                    Description = "Fresh Vegetable Biryani",
                    Price = 249,
                    ImageUrl = "veg-biryani.jpg",
                    Category = "Biryani",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Margherita Pizza",
                    Description = "Cheesy Classic Pizza",
                    Price = 299,
                    ImageUrl = "PIZZA-MARGHERITA.jpg",
                    Category = "Pizza",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Farmhouse Pizza",
                    Description = "Loaded with Veggies",
                    Price = 399,
                    ImageUrl = "farmhouse-pizza.jpg",
                    Category = "Pizza",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Pepperoni Pizza",
                    Description = "Loaded Pepperoni",
                    Price = 449,
                    ImageUrl = "paparoni.jpg",
                    Category = "Pizza",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Chicken Burger",
                    Description = "Crispy Chicken Burger",
                    Price = 199,
                    ImageUrl = "chicken-burger.jpg",
                    Category = "Burger",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Veg Burger",
                    Description = "Paneer Veg Burger",
                    Price = 169,
                    ImageUrl = "veg-burger.jpg",
                    Category = "Burger",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "French Fries",
                    Description = "Salted Crispy Fries",
                    Price = 99,
                    ImageUrl = "french-fries.jpg",
                    Category = "Snacks",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Chicken Wings",
                    Description = "Spicy Chicken Wings",
                    Price = 249,
                    ImageUrl = "chicken-wings.jpg",
                    Category = "Snacks",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Hakka Noodles",
                    Description = "Veg Hakka Noodles",
                    Price = 199,
                    ImageUrl = "hakkanoodles.jpg",
                    Category = "Chinese",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Fried Rice",
                    Description = "Veg Fried Rice",
                    Price = 179,
                    ImageUrl = "fried-rice.jpg",
                    Category = "Chinese",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Chicken Momos",
                    Description = "Steamed Chicken Momos",
                    Price = 189,
                    ImageUrl = "chicken-momos.jpg",
                    Category = "Chinese",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Paneer Wrap",
                    Description = "Grilled Paneer Wrap",
                    Price = 179,
                    ImageUrl = "panner-wrap.jpg",
                    Category = "Wrap",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Coca Cola",
                    Description = "500ml Cold Drink",
                    Price = 60,
                    ImageUrl = "cocacola.jpg",
                    Category = "Drinks",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Mango Shake",
                    Description = "Fresh Mango Shake",
                    Price = 120,
                    ImageUrl = "mangoshake.jpg",
                    Category = "Drinks",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Cold Coffee",
                    Description = "Cold Coffee",
                    Price = 140,
                    ImageUrl = "cold-coffee.jpg",
                    Category = "Drinks",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Chocolate Cake",
                    Description = "Chocolate Cake Slice",
                    Price = 180,
                    ImageUrl = "chocolate-cake.jpg",
                    Category = "Dessert",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Vanilla Ice Cream",
                    Description = "Two Scoops",
                    Price = 90,
                    ImageUrl = "vanilla-ice.jpg",
                    Category = "Dessert",
                    IsAvailable = true
                },

                new FoodItem
                {
                    Name = "Chocolate Donut",
                    Description = "Fresh Chocolate Donut",
                    Price = 80,
                    ImageUrl = "chocolate-dohnut.jpg",
                    Category = "Dessert",
                    IsAvailable = true
                }

            );

            context.SaveChanges();
        }
    }
}