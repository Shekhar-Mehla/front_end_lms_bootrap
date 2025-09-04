import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge, ListGroup } from "react-bootstrap";

const AdminUserProfile = () => {
  const { id } = useParams();

  // Dummy data for now
  const user = {
    id,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+61 123 456 789",
    address: "123 Main Street, Sydney",
    status: "Active",
    memberSince: "2023-01-15",
    totalBorrowed: 12,
    currentBorrowed: 3,
    recentBooks: [
      "The Great Adventure",
      "Learning React",
      "JavaScript Essentials",
    ],
  };

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-3">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>
            <p>
              Status:{" "}
              <Badge bg={user.status === "Active" ? "success" : "secondary"}>
                {user.status}
              </Badge>
            </p>
            <p>Member Since: {user.memberSince}</p>

            <Row className="mt-3 text-center">
              <Col md={6}>
                <Card bg="success" text="white" className="p-3">
                  <Card.Body>
                    <Card.Title>Total Borrowed</Card.Title>
                    <Card.Text>{user.totalBorrowed}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="warning" text="white" className="p-3">
                  <Card.Body>
                    <Card.Title>Currently Borrowed</Card.Title>
                    <Card.Text>{user.currentBorrowed}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card className="mt-4 p-3">
              <Card.Title>Recent Borrowed Books</Card.Title>
              <ListGroup variant="flush">
                {user.recentBooks.map((book, idx) => (
                  <ListGroup.Item key={idx}>{book}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUserProfile;
