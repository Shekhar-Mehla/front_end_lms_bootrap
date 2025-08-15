import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const ProductCard = ({
  author,

  imageUrl,
  publishedDate = "2021",
  slug = "www.google.com",
  title = "Pythron Crash Course",
}) => {
  return (
    <motion.div
      className="card flex-wrap  align-items-center"
      style={{ width: "18rem" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
    >
      <div className="" style={{ width: "250px", height: "250px" }}>
        <Card.Img
          style={{
            width: "100%",
            height: "100%",

            objectFit: "contain",
            objectPosition: "center",
          }}
          className="rounded mt-2"
          variant="top"
          src={imageUrl}
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}-{publishedDate}
        </Card.Text>

        <Link to={`/book/${slug}`}>
          <motion.div whileTap={{ scale: 0.6 }}>
            <Button variant="dark" className="">
              View Details
            </Button>
          </motion.div>
        </Link>
      </Card.Body>
    </motion.div>
  );
};

export default ProductCard;
