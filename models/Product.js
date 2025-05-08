// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  color: String,
  company: String,
  category: String
});

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
