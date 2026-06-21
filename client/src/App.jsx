import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const menu = [
    { id: 1, name: "Idly", price: 60, category: "Breakfast" },
    { id: 2, name: "Masala Dosa", price: 80, category: "Breakfast" },
    { id: 3, name: "Paneer Dosa", price: 120, category: "Breakfast" },

    { id: 4, name: "Veg Pizza", price: 175, category: "Pizza" },
    { id: 5, name: "Paneer Pizza", price: 200, category: "Pizza" },

    { id: 6, name: "French Fries", price: 90, category: "Snacks" },
    { id: 7, name: "Peri Peri Fries", price: 100, category: "Snacks" },

    { id: 8, name: "Veg Hakka Noodles", price: 120, category: "Chinese" },
    { id: 9, name: "Veg Fried Rice", price: 130, category: "Chinese" },

    { id: 10, name: "Pani Puri", price: 60, category: "Chaat" },
    { id: 11, name: "Bhel Puri", price: 80, category: "Chaat" },

    { id: 12, name: "Tea", price: 30, category: "Beverages" },
    { id: 13, name: "Coffee", price: 35, category: "Beverages" },

    { id: 14, name: "Banana Milkshake", price: 110, category: "Milkshake" },
    { id: 15, name: "Oreo Milkshake", price: 120, category: "Milkshake" },
  ];

  const categories = [
    "All",
    "Breakfast",
    "Pizza",
    "Snacks",
    "Chinese",
    "Chaat",
    "Beverages",
    "Milkshake",
  ];

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🍽️ R Kafe</h1>
      <h2>🛒 Cart ({cartCount})</h2>
      <p>Pure Veg Restaurant</p>
       <div
  style={{
    border: "1px solid #555",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  <h3>Selected Items</h3>

  {cartItems.length === 0 ? (
    <p>Cart is Empty</p>
  ) : (
    <>
      {cartItems.map((cartItem, index) => (
        <p key={index}>
          {cartItem.name} - ₹{cartItem.price}
        </p>
      ))}

      <h3>
        Total: ₹
        {cartItems.reduce(
          (total, item) => total + item.price,
          0
        )}
      </h3>
    </>
  )}
</div>

      <div style={{ marginBottom: "20px" }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: "5px",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #444",
              borderRadius: "12px",
              padding: "15px",
              backgroundColor: "#1e1e1e",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <h2>₹{item.price}</h2>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setCartItems([...cartItems, item]);
                }}
              style={{
                padding: "10px",
                borderRadius: "8px",
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
}

export default App;