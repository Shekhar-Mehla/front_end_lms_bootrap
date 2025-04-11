import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import c from "../../assets/images/c1.jpg";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductCard = ({
  author,

  imageUrl,
  publishedDate = "2021",
  slug = "www.google.com",
  title = "Pythron Crash Course",
}) => {
  return (
    <Col md={3}>
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4 },
        }}
      >
        <Card style={{ width: "20rem" }} className="shadow-lg flex-grow-sm-1 ">
          <div className="m-2 shadow-sm">
            <Card.Img
              className="rounded"
              variant="top"
              src={
                import.meta.env.VITE_BASE_URL_BACKEND_IMG + imageUrl.slice(6)
              }
            />
          </div>
          <Card.Body className="text-center">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {author}-{publishedDate}
            </Card.Text>

            <Link to={slug}>
              <motion.div whileTap={{ scale: 0.6 }}>
                <Button variant="dark" className="">
                  View Details
                </Button>
              </motion.div>
            </Link>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ProductCard;
