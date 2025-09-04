import React from "react";
import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";

const Borrow = () => {
  // Dummy borrow history data
  const borrowHistory = [
    {
      book: "The Great Adventure",
      borrowedDate: "2025-07-01",
      dueDate: "2025-07-15",
      status: "Returned",
    },
    {
      book: "Learning React",
      borrowedDate: "2025-07-10",
      dueDate: "2025-07-24",
      status: "Borrowed",
    },
    {
      book: "JavaScript Essentials",
      borrowedDate: "2025-06-20",
      dueDate: "2025-07-04",
      status: "Returned",
    },
    {
      book: "Mastering CSS",
      borrowedDate: "2025-08-01",
      dueDate: "2025-08-15",
      status: "Borrowed",
    },
    {
      book: "Node.js Guide",
      borrowedDate: "2025-07-18",
      dueDate: "2025-08-01",
      status: "Returned",
    },
  ];

  // Function to assign badge color based on status
  const getStatusVariant = (status) => {
    switch (status) {
      case "Returned":
        return "success";
      case "Borrowed":
        return "warning";
      case "Overdue":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={12}>
          <Card className="p-3">
            <Card.Title className="mb-3">Borrow History</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Book</th>
                  <th>Borrowed Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {borrowHistory.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.book}</td>
                    <td>{item.borrowedDate}</td>
                    <td>{item.dueDate}</td>
                    <td>
                      <Badge bg={getStatusVariant(item.status)}>
                        {item.status}
                      </Badge>
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

export default Borrow;
