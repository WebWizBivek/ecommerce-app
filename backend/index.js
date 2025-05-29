const dotenv = require('dotenv');
dotenv.config();
const http = require("http");
const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');
const connectDB = require('./utils/db.js');
const app = express();


const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/orders', orderRoutes)




server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


