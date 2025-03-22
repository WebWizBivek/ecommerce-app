const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        discountPercentage: { type: Number, default: 0 },
        rating: { type: Number, default: 0, min: 0, max: 5 },
        stock: { type: Number, required: true, min: 0 },
        tags: [{ type: String }],
        brand: { type: String, required: true },
        sku: { type: String, required: true, unique: true },
        weight: { type: Number, required: true },

        dimensions: {
            width: { type: Number, required: true },
            height: { type: Number, required: true },
            depth: { type: Number, required: true },
        },

        warrantyInformation: { type: String },
        shippingInformation: { type: String },
        availabilityStatus: { type: String, enum: ["In Stock", "Out of Stock", "Preorder"], default: "In Stock" },

        reviews: {
            rating: { type: Number, required: true, min: 1, max: 5 },
            comment: { type: String, required: true },
            date: { type: Date, default: Date.now },
            reviewerName: { type: String, required: true },
            reviewerEmail: { type: String, required: true },
        },

        returnPolicy: { type: String },
        minimumOrderQuantity: { type: Number, default: 1 },

        meta: {
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
            barcode: { type: String },
            qrCode: { type: String },
        },

        images: [{ type: String }],
        thumbnail: { type: String, required: true },
    },
    { timestamps: true } // Auto adds createdAt & updatedAt
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
