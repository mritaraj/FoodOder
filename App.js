import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  <>
    <div className="header">
      <div className="logo">
        <img />
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  </>;
};
const App = () => {
  return (
    <>
      <Header />
      hello
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<App />);
