import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const placeholderImage =
  "https://via.placeholder.com/250x350.png?text=No+Image";

const ListViewCard = ({
  author,
  imageUrl,
  publishedDate = "2021",
  slug = "www.google.com",
  title = "Python Crash Course",
  smallDescription,
}) => {
  return (
    <motion.div
      className="w-100 mb-4"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <Card className="shadow-sm d-flex flex-row flex-wrap">
        {/* Book Image */}
        <div
          style={{
            flex: "0 0 200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Card.Img
            src={imageUrl || placeholderImage}
            alt={title}
            style={{
              maxHeight: "320px",
              width: "auto",
              objectFit: "contain",
            }}
            className="rounded"
          />
        </div>

        {/* Content Section */}
        <Card.Body
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="text-muted mb-2">
              {author} - {publishedDate}
            </Card.Text>
            <Card.Text style={{ lineHeight: "1.5" }}>
              {smallDescription}
            </Card.Text>
          </div>

          <div className="mt-3">
            <Link to={`/book/${slug}`}>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="dark">View Details</Button>
              </motion.div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ListViewCard;
