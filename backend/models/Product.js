import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    quantity: { type: Number, min: 0, required: true },
  },
  { 
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
