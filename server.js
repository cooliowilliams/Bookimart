const dotenv = require("dotenv");
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/auth'); // Import auth routes
const cors = require('cors');
const express = require('express');
const Product = require('./models/product');  // Import your Product model
const app = express();

dotenv.config(); // For loading environment variables

app.use(express.json()); 
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use(cors({
  origin: 'http://localhost:3000', // Replace this with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods you want to allow
  credentials: true // Allow credentials (if needed)
}));
app.use(express.static('public', {
  maxAge: '1d',  // Adjust caching if necessary
  etag: false
}));

// MongoDB connection
const mongoUri = 'mongodb+srv://CoolioWilliams677:Skinner01%24@cluster0.ytlasqb.mongodb.net/ecommerceDB?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB!');

    // Add the code to rename the field when the server starts
    const updateProducts = async () => {
      try {
        await Product.updateMany({}, { $rename: { "imageUrl": "image" } });
        console.log('Field renamed successfully!');
      } catch (err) {
        console.error('Error renaming field:', err);
      }
    };
    
    // Call the update function once the MongoDB connection is established
    updateProducts();
    
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Use the product routes
app.use('/api/products', productRoutes);

// Use the auth routes for signup and login
app.use('/api/auth', authRoutes); // Adding auth routes

// Basic route
app.get('/', (req, res) => {
  res.send('E-commerce API running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
