import { useNavigate } from "react-router-dom";

class Navigator {
  navigate = useNavigate();

  login = () => {
    this.navigate("/login");
  };

  signup = () => {
    this.navigate("/signup");
  };

  address = () => {
    this.navigate("/address");
  };

  feed = () => {
    this.navigate("/feed");
  };

  restaurant = (id) => {
    this.navigate(`restaurant/${id}`);
  };

  cart = () => {
    this.navigate("/cart");
  };
}

export default Navigator;
