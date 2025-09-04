import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const userState = useSelector((state) => state.userInfo); // full user state
  const user = userState.user || userState; // support different Redux structures

  if (!user) return null; // wait until user data loads

  return (
    <Stack gap={3}>
      {/* Common Links for all logged-in users */}
      <Link to="/user" className="nav-link p-2">
        Dashboard
      </Link>
      <Link to="/user/borrow-history" className="nav-link p-2">
        Borrow History
      </Link>
      <Link to="/user/profile" className="nav-link p-2">
        Profile
      </Link>

      {/* Admin Only Links */}
      {user.role === "admin" && (
        <>
          <Link to="/user/insert-new-book" className="nav-link p-2">
            Add New Book
          </Link>
          <Link to="/user/admin-book-table" className="nav-link p-2">
            Manage Books
          </Link>
          <Link to="/user/reviews" className="nav-link p-2">
            Review
          </Link>
          <Link to="/user/user-list" className="nav-link p-2">
            Users
          </Link>
        </>
      )}
    </Stack>
  );
};

export default SideBar;
