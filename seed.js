const mongoose = require('mongoose');
const Product = require('./models/product'); // Adjust the path to your model

const mongoUri = 'mongodb+srv://CoolioWilliams677:Skinner01%24@cluster0.ytlasqb.mongodb.net/ecommerceDB?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  const products = [
    {
      name: "Wireless Bluetooth Headphones",
      price: 59.99,
      description: "Noise-cancelling, wireless Bluetooth headphones with long-lasting battery.",
      category: "Electronics",
      stock: 100,
      image: "iphone12.png"
    },
    {
      name: "Smartphones",
      price: 999.99,
      description: "Latest smartphone with advanced camera features and powerful performance.",
      category: "Mobile Phones",
      stock: 50,
      image: "1.jpg"
    },
    {
      name: "4K Ultra HD Smart TV",
      price: 799.99,
      description: "65-inch 4K Ultra HD Smart TV with built-in streaming services.",
      category: "Televisions",
      stock: 25,
      image: "iphone12.png"
    },
    {
      name: "Gaming Laptop",
      price: 1299.99,
      description: "High-performance laptop for gaming and heavy multitasking.",
      category: "Computers",
      stock: 10,
      image: "iphone12.png"
    },
    {
      name: "Electric Kettle",
      price: 29.99,
      description: "Fast-boiling electric kettle with auto shut-off and boil-dry protection.",
      category: "Kitchen Appliances",
      stock: 200,
      image: "iphone12.png"
    }
  ];
  
  // Insert products into the database
  Product.insertMany(products)
    .then(() => {
      console.log('Products added successfully!');
      mongoose.connection.close(); // Close the connection after seeding
    })
    .catch(err => {
      console.error('Error adding products:', err);
      mongoose.connection.close();
    });