import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const borrowedBooks = location?.state?.borrowed || [];
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const today = format(new Date(), "PPP");
  const totalBooks = borrowedBooks.length;
  const totalQuantity = borrowedBooks.reduce(
    (acc, book) => acc + book.quantity,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f9fafb",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Confetti */}
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        recycle={false}
        numberOfPieces={300}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        style={{
          backgroundColor: "#4ade80",
          padding: "2rem 3rem",
          borderRadius: "16px",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: 2, duration: 1 }}
          style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}
        >
          🎉
        </motion.div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
          }}
        >
          Success!
        </h1>
        <p style={{ fontSize: "1rem" }}>
          Your {totalQuantity} book{totalQuantity > 1 ? "s" : ""} were borrowed
          on <strong>{today}</strong>.
        </p>
      </motion.div>

      {/* Borrowed Books Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          padding: "1rem",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Book</th>
              <th style={{ textAlign: "center", padding: "0.5rem" }}>
                Quantity
              </th>
              <th style={{ textAlign: "center", padding: "0.5rem" }}>
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ borderBottom: "1px solid #f0f0f0" }}
              >
                <td
                  style={{
                    padding: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {book.thumbnail && (
                    <img
                      src={book.thumbnail}
                      alt={book.title}
                      style={{
                        width: "50px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  )}
                  <span>{book.title}</span>
                </td>
                <td style={{ textAlign: "center", padding: "0.5rem" }}>
                  {book.quantity}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "0.5rem",
                    color: "#e11d48",
                    fontWeight: 500,
                  }}
                >
                  {format(new Date(book.dueDate), "PP")}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Home
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/all-books")}
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#10b981",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Borrow More
        </motion.button>
      </motion.div>

      <p style={{ marginTop: "2rem", color: "#6b7280", fontSize: "0.9rem" }}>
        Return your books on or before the due date to avoid late fees.
      </p>
    </div>
  );
};

export default ThankYouPage;
