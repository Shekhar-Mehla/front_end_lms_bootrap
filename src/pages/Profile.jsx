import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Image,
} from "react-bootstrap";

const Profile = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+61 123 456 789",
    address: "123 Main Street, Sydney, Australia",
    memberSince: "2023-01-15",
    profilePic: "https://i.pravatar.cc/150?img=12", // dummy avatar
    totalBorrowed: 12,
    currentBorrowed: 3,
  };

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-3">
            <Row>
              <Col md={4} className="text-center">
                <Image
                  src={user.profilePic}
                  roundedCircle
                  fluid
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col md={8}>
                <h3>{user.name}</h3>
                <p className="text-muted">{user.email}</p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Address:</strong> {user.address}
                </p>
                <p>
                  <strong>Member Since:</strong> {user.memberSince}
                </p>
                <div className="mt-3">
                  <Button variant="primary" className="me-2">
                    Edit Profile
                  </Button>
                  <Button variant="secondary">Change Password</Button>
                </div>
              </Col>
            </Row>

            {/* Optional Stats Section */}
            <Row className="mt-4 text-center">
              <Col md={6}>
                <Card bg="success" text="white" className="p-3">
                  <Card.Body>
                    <Card.Title>Total Borrowed</Card.Title>
                    <Card.Text style={{ fontSize: "1.8rem" }}>
                      {user.totalBorrowed}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="warning" text="white" className="p-3">
                  <Card.Body>
                    <Card.Title>Currently Borrowed</Card.Title>
                    <Card.Text style={{ fontSize: "1.8rem" }}>
                      {user.currentBorrowed}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Optional Recent Activity */}
            <Row className="mt-4">
              <Col md={12}>
                <Card className="p-3">
                  <Card.Title>Recent Borrowed Books</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Book A - 2025-08-01</ListGroup.Item>
                    <ListGroup.Item>Book B - 2025-07-28</ListGroup.Item>
                    <ListGroup.Item>Book C - 2025-07-15</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
