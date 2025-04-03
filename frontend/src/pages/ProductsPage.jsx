import { useState, useEffect } from "react";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: {
        width: 12.42,
        height: 8.63,
        depth: 29.13,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "9EN8WLT2",
      weight: 8,
      dimensions: {
        width: 24.16,
        height: 10.7,
        depth: 11.07,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Hazel Gardner",
          reviewerEmail: "hazel.gardner@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 25,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "0516267971277",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.51,
      stock: 68,
      tags: ["beauty", "lipstick"],
      brand: "Chic Cosmetics",
      sku: "O5IF1NTA",
      weight: 5,
      dimensions: {
        width: 14.37,
        height: 13.94,
        depth: 14.6,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Oscar Powers",
          reviewerEmail: "oscar.powers@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Carter Rivera",
          reviewerEmail: "carter.rivera@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 6,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "9444582199406",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "womens-watches", "luxury watches"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Uncomment this line to fetch real data
        // const response = await axios.get("/api/products");
        // setProducts(response.data);
        setFilteredProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Shop Our Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 text-center bg-white shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500 text-sm">
              {product.brand} - {product.category}
            </p>
            <img
              src={product.thumbnail || product.images[0]}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg my-3"
            />
            <p className="text-xl font-bold text-gray-900">${product.price}</p>
            <p
              className={`text-sm ${
                product.availabilityStatus === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {product.availabilityStatus}
            </p>
            <p className="text-sm mt-2">⭐ {product.rating} / 5</p>
            <button className="mt-4 px-6 py-2 w-full bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
