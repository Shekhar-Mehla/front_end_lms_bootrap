import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({
  author,
  imageUrl,
  publishedDate = "2021",
  slug = "www.google.com",
  title = "Python Crash Course",
}) => {
  return (
    <motion.div
      className="shadow-sm rounded overflow-hidden bg-white"
      style={{ width: "18rem", margin: "10px" }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "3/4", // ensures all images maintain same ratio
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // fills container without leaving empty space
          }}
        />
      </div>

      {/* Card Body */}
      <Card.Body className="text-center">
        <Card.Title
          className="fw-bold text-dark"
          style={{ fontSize: "1.1rem" }}
        >
          {title}
        </Card.Title>
        <Card.Text className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
          {author} – {publishedDate}
        </Card.Text>

        <Link to={`/book/${slug}`} style={{ textDecoration: "none" }}>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button variant="dark" className="w-100">
              View Details
            </Button>
          </motion.div>
        </Link>
      </Card.Body>
    </motion.div>
  );
};

export default ProductCard;
