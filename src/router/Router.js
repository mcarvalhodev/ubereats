import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantListPage from "../pages/RestaurantListPage/RestauranteListPage";
import RestauranteDetailPage from "../pages/RestaurantDetailPage/RestauranteDetailPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage";
import CartPage from "../pages/CartPage/CartPage";
import UpdateProfilePage from "../pages/UpdateProfilePage/UpdateProfilePage";
import OrdersHistoryPage from "../pages/OrdersHistoryPage/OrdersHistoryPage";
import HomePage from "../pages/HomePage/HomePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/feed" element={<RestaurantListPage />}></Route>
        <Route path="/address" element={<AddAddressPage />}></Route>
        <Route
          path="/restaurant/:id"
          element={<RestauranteDetailPage />}
        ></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/profile" element={<UpdateProfilePage />}></Route>
        <Route path="/orders/history" element={<OrdersHistoryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
