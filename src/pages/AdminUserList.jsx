import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Badge,
  ButtonGroup,
} from "react-bootstrap";

const AdminUserList = () => {
  // Dummy user data
  const allUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "Active",
      joined: "2023-01-15",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      status: "Inactive",
      joined: "2023-03-22",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: "Active",
      joined: "2023-05-10",
    },
    {
      id: 4,
      name: "David Lee",
      email: "david@example.com",
      status: "Active",
      joined: "2023-06-05",
    },
    {
      id: 5,
      name: "Eve Davis",
      email: "eve@example.com",
      status: "Inactive",
      joined: "2023-07-01",
    },
  ];

  const [filter, setFilter] = useState("All");

  // Filter users based on status
  const filteredUsers =
    filter === "All"
      ? allUsers
      : allUsers.filter((user) => user.status === filter);

  // Handler functions for actions
  const handleView = (id) => {
    alert(`View profile of user ID: ${id}`);
    // Later, navigate to user's profile page
  };

  const handleDeactivate = (id) => {
    alert(`Deactivate user ID: ${id}`);
    // Later, call API to deactivate user
  };

  const handleDelete = (id) => {
    alert(`Delete user ID: ${id}`);
    // Later, call API to delete user
  };

  return (
    <Container fluid className="mt-4">
      <Row className="mb-3">
        <Col md={12}>
          <Card className="p-3">
            <Card.Title className="mb-3">User List</Card.Title>

            {/* Filter Buttons */}
            <ButtonGroup className="mb-3">
              {["All", "Active", "Inactive"].map((status) => (
                <Button
                  key={status}
                  variant={filter === status ? "primary" : "outline-primary"}
                  onClick={() => setFilter(status)}
                >
                  {status}
                </Button>
              ))}
            </ButtonGroup>

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, idx) => (
                    <tr key={user.id}>
                      <td>{idx + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Badge
                          bg={
                            user.status === "Active" ? "success" : "secondary"
                          }
                        >
                          {user.status}
                        </Badge>
                      </td>
                      <td>{user.joined}</td>
                      <td>
                        <Button
                          variant="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleView(user.id)}
                        >
                          View
                        </Button>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => handleDeactivate(user.id)}
                        >
                          Deactivate
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUserList;
