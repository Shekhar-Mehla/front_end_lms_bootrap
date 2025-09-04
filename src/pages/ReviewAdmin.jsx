import React from "react";
import { Container, Row, Col, Card, Table, Button, Badge } from "react-bootstrap";

const ReviewAdmin = () => {
  // Dummy data for pending requests
  const pendingRequests = [
    { id: 1, member: "Alice", book: "The Great Adventure", type: "Borrow Request", date: "2025-08-01" },
    { id: 2, member: "Bob", book: "Learning React", type: "Borrow Request", date: "2025-08-02" },
    { id: 3, member: "Charlie", book: "JavaScript Essentials", type: "Return Request", date: "2025-08-03" },
    { id: 4, member: "David", book: "Mastering CSS", type: "Borrow Request", date: "2025-08-04" },
  ];

  // Handlers for Approve / Reject
  const handleApprove = (id) => {
    alert(`Approved request ID: ${id}`);
    // Later, call API to approve
  };

  const handleReject = (id) => {
    alert(`Rejected request ID: ${id}`);
    // Later, call API to reject
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={12}>
          <Card className="p-3">
            <Card.Title className="mb-3">Pending Requests / Reviews</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Member</th>
                  <th>Book</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((item, idx) => (
                  <tr key={item.id}>
                    <td>{idx + 1}</td>
                    <td>{item.member}</td>
                    <td>{item.book}</td>
                    <td>
                      <Badge bg={item.type.includes("Borrow") ? "warning" : "info"}>
                        {item.type}
                      </Badge>
                    </td>
                    <td>{item.date}</td>
                    <td>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={() => handleApprove(item.id)}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleReject(item.id)}
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};




export default ReviewAdmin