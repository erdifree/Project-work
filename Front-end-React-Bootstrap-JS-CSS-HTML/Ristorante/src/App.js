import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { TablePage } from "./pages/TablePage";
import { Admin } from "./pages/Admin";
import { Menu } from "./components/category/Menu";
import GetFoodByCategory from "./pages/GetFoodByCategory.js"
import { GetDrinksByCategory } from "./pages/GetDrinksByCategory";
import { useState } from "react";
import { Login } from "./pages/LoginPage";
import { OrderPage } from "./pages/OrderPage";
import { OrderCategory } from "./components/category/OrderCategory";
import { ManagmentPaymentPage } from "./pages/ManagmentPaymentPage";
import { MenuDrinks } from "./components/category/MenuDrinks";

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleReset = () => {
    setCartProducts([]);
  };

  const handleDeleteClick = (product) => {
    console.log(cartProducts);
    const newCart = cartProducts.filter((el) => {
      if (el.id === product.id) {
        el.quantity--;
        if (el.quantity === 0) {
          return false;
        }
      }
      return true;
    });
    setCartProducts(newCart);
  };

  // create new product
  const handleAddClick = (product) => {
    let found = false;
    let newCart = cartProducts.filter((el) => {
      return true;
    });
    newCart.forEach((el) => {
      if (el.id === product.id && el.type === product.type) {
        el.quantity++;
        found = true;
      }
    });

    if (!found) {
      const newProduct = {
        id: product.id,
        name: product.name,
        quantity: 1,
        description: product.description,
        price: product.price,
        type:product.type

      };
      const newCart2 = [...newCart, newProduct];
      setCartProducts(newCart2);
    } else {
      setCartProducts(newCart);
    }
  };
 
  function handleLinkClick(event) {
   // event.preventDefault();
  }
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/order/:payed/" element={<OrderPage />} />
        <Route
          path="/managmentPaymentPage"
          element={<ManagmentPaymentPage />}
        />
        <Route
          path="/table"
          element={<TablePage disable={handleLinkClick} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/order" element={<OrderCategory />} />
        <Route
          path="/table/:tableId"
          element={
            <Menu
              add={handleAddClick}
              del={handleDeleteClick}
              cartProducts={cartProducts}
              reset={handleReset}
            />
          }
        />
        <Route
          path="/table/:tableId/drinkscategory"
          element={
            <MenuDrinks
              add={handleAddClick}
              del={handleDeleteClick}
              cartProducts={cartProducts}
              reset={handleReset}
            />
          }
        />
        <Route
          path="/table/:tableId/:elId"
          element={
            <Menu
              add={handleAddClick}
              del={handleDeleteClick}
              cartProducts={cartProducts}
              reset={handleReset}
            />
          }
        />
        <Route
          path="/table/:tableId/foodcategory/:type"
          element={
            <GetFoodByCategory
              addFood={handleAddClick}
              del={handleDeleteClick}
              cartProducts={cartProducts}
            />
          }
        />
        <Route
          path="/table/:tableId/drinkscategory/:type"
          element={
            <GetDrinksByCategory
              addDrink={handleAddClick}
              del={handleDeleteClick}
              cartProducts={cartProducts}
            />
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
