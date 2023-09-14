import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { Login, Register, addToCart, getCurrentUser } from './Controllers/UserController.js';
import { addProduct, allProducts } from './Controllers/ProductController.js';

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use(morgan("dev"));

app.get('/',(req,res)=>{
    res.send("Working")
})
app.post('/register',Register)
app.post('/login',Login)
app.post('/get-current-user',getCurrentUser)
app.post("/add-product",addProduct)
app.get("/all-product",allProducts)
// app.post("/single-product",SingleProduct)
app.post("/add-to-cart",addToCart)
// 

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to mongodb")
}).catch((error)=>{
    console.log(error)
})

app.listen(7000,()=>{
    console.log("Server listening on 7000")
})