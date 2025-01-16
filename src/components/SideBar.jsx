import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Stack gap={3}>
      <Link to="/user" className=" nav-link p-2">
        Dashboard
      </Link>
      <Link to="/user/borrow-history" className=" nav-link p-2">
        Borrow History
      </Link>
      <Link to="/user/profile" className=" nav-link p-2">
        Profile
      </Link>
      <Link to="/user/reviews" className=" nav-link p-2">
        Review
      </Link>
      <Link to="/user/user-list" className=" nav-link p-2">
        Users
      </Link>
    </Stack>
  );
};

export default SideBar;
