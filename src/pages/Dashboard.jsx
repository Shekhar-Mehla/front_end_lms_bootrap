import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  // Dummy stats
  const stats = {
    totalBooks: 1200,
    availableBooks: 800,
    borrowedBooks: 400,
    totalMembers: 150,
  };

  // Dummy data for members growth
  const membersTrend = [
    { month: "Jan", members: 10 },
    { month: "Feb", members: 15 },
    { month: "Mar", members: 20 },
    { month: "Apr", members: 25 },
    { month: "May", members: 30 },
    { month: "Jun", members: 35 },
    { month: "Jul", members: 40 },
  ];

  // Dummy data for top borrowed books
  const topBorrowed = [
    { title: "Book A", borrowed: 50 },
    { title: "Book B", borrowed: 40 },
    { title: "Book C", borrowed: 35 },
    { title: "Book D", borrowed: 25 },
    { title: "Book E", borrowed: 20 },
  ];

  // Dummy data for recent activity
  const recentActivity = [
    { member: "Alice", book: "Book A", date: "2025-08-01" },
    { member: "Bob", book: "Book B", date: "2025-08-02" },
    { member: "Charlie", book: "Book C", date: "2025-08-03" },
    { member: "David", book: "Book D", date: "2025-08-04" },
    { member: "Eve", book: "Book E", date: "2025-08-05" },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <Container fluid className="mt-4">
      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card bg="primary" text="white" className="text-center p-3">
            <Card.Body>
              <Card.Title>Total Books</Card.Title>
              <Card.Text style={{ fontSize: "2rem" }}>
                {stats.totalBooks}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white" className="text-center p-3">
            <Card.Body>
              <Card.Title>Available Books</Card.Title>
              <Card.Text style={{ fontSize: "2rem" }}>
                {stats.availableBooks}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="warning" text="white" className="text-center p-3">
            <Card.Body>
              <Card.Title>Borrowed Books</Card.Title>
              <Card.Text style={{ fontSize: "2rem" }}>
                {stats.borrowedBooks}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="info" text="white" className="text-center p-3">
            <Card.Body>
              <Card.Title>Total Members</Card.Title>
              <Card.Text style={{ fontSize: "2rem" }}>
                {stats.totalMembers}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts */}
      <Row>
        <Col md={6} className="mb-4">
          <Card className="p-3">
            <Card.Title className="mb-3">Books Status</Card.Title>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Available", value: stats.availableBooks },
                    { name: "Borrowed", value: stats.borrowedBooks },
                  ]}
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {[
                    { name: "Available", value: stats.availableBooks },
                    { name: "Borrowed", value: stats.borrowedBooks },
                  ].map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="p-3">
            <Card.Title className="mb-3">Members Growth</Card.Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={membersTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="members" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Top Borrowed Books */}
      <Row>
        <Col md={12} className="mb-4">
          <Card className="p-3">
            <Card.Title className="mb-3">Top Borrowed Books</Card.Title>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topBorrowed}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="borrowed" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity Table */}
      <Row>
        <Col md={12}>
          <Card className="p-3">
            <Card.Title className="mb-3">Recent Activity</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Book</th>
                  <th>Date Borrowed</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.member}</td>
                    <td>{item.book}</td>
                    <td>{item.date}</td>
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

export default Dashboard;
