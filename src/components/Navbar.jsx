import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/plants">Plants</Link> | 
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;