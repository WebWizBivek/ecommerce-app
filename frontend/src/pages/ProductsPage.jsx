import { useState, useEffect } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 191,
      title: "Rolex Cellini Moonphase",
      description:
        "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
      category: "womens-watches",
      price: 15999.99,
      discountPercentage: 18.76,
      rating: 3.41,
      stock: 66,
      tags: ["watches", "luxury watches"],
      brand: "Rolex",
      sku: "E8CYFYQL",
      weight: 5,
      dimensions: {
        width: 22.54,
        height: 20.15,
        depth: 25.37,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Logan Lee",
          reviewerEmail: "logan.lee@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Would not recommend!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Leah Henderson",
          reviewerEmail: "leah.henderson@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Mateo Nguyen",
          reviewerEmail: "mateo.nguyen@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.628Z",
        updatedAt: "2024-05-23T08:56:21.628Z",
        barcode: "3517608890772",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/1.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/2.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
    },
    {
      id: 192,
      title: "Rolex Datejust Women",
      description:
        "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
      category: "womens-watches",
      price: 10999.99,
      discountPercentage: 17.72,
      rating: 3.53,
      stock: 31,
      tags: ["watches", "luxury watches", "women's watches"],
      brand: "Rolex",
      sku: "VKQ2UNB9",
      weight: 8,
      dimensions: {
        width: 14.53,
        height: 29.73,
        depth: 10.22,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Evan Reed",
          reviewerEmail: "evan.reed@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Isabella Jackson",
          reviewerEmail: "isabella.jackson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.628Z",
        updatedAt: "2024-05-23T08:56:21.628Z",
        barcode: "6032534220602",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/1.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/2.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/thumbnail.png",
    },
    {
      id: 193,
      title: "Watch Gold for Women",
      description:
        "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
      category: "womens-watches",
      price: 799.99,
      discountPercentage: 6.37,
      rating: 3.03,
      stock: 94,
      tags: ["watches", "women's watches"],
      brand: "Fashion Gold",
      sku: "N6I9YEWM",
      weight: 8,
      dimensions: {
        width: 5.9,
        height: 13.64,
        depth: 23.65,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 1,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Lucas Allen",
          reviewerEmail: "lucas.allen@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Bella Gonzalez",
          reviewerEmail: "bella.gonzalez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Michael Johnson",
          reviewerEmail: "michael.johnson@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 2,
      meta: {
        createdAt: "2024-05-23T08:56:21.628Z",
        updatedAt: "2024-05-23T08:56:21.628Z",
        barcode: "0793324106392",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/1.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/2.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/thumbnail.png",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const categories = ["All", "womens-watches", "luxury watches"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const productArray = Array.isArray(response.data) ? response.data : [];
        setProducts(productArray);
        setFilteredProducts(productArray);
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
    if (category && category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        All Products
      </h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: "1",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {product.title}
            </h3>
            <p style={{ color: "#666", fontSize: "14px" }}>
              {product.brand} - {product.category}
            </p>
            <img
              src={product.thumbnail || product.images[0]}
              alt={product.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
              ${product.price}
            </p>
            <p style={{ fontSize: "12px", color: "#666" }}>
              {product.warrantyInformation}
            </p>
            <p style={{ fontSize: "12px", color: "green" }}>
              {product.availabilityStatus}
            </p>
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              ⭐ {product.rating} / 5
            </p>
            <button
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "100%",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
