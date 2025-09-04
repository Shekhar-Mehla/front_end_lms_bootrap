import React, { useState } from "react";
import ProductCard from "../Cards/ProductCard";
import ListViewCard from "../Cards/ListViewCard";
import CustomPagination from "../pagination/CustomPagination";
import { Alert, Button, ButtonGroup, Container } from "react-bootstrap";

const PublicBookListing = ({ books }) => {
  const [active, setActive] = useState(1);
  const [view, setView] = useState("card");

  const productPerScreen = 2;
  const startIndex = (active - 1) * productPerScreen;
  const endIndex = startIndex + productPerScreen;
  const totalPagination = Math.ceil(books?.length / productPerScreen);
  const displayBook = books?.slice(startIndex, endIndex);

  return (
    <Container className="my-4">
      {displayBook.length > 0 ? (
        <>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>{books.length} book{books.length > 1 ? "s" : ""} found</div>
            <ButtonGroup>
              <Button
                variant={view === "card" ? "secondary" : "outline-secondary"}
                onClick={() => setView("card")}
              >
                Card View
              </Button>
              <Button
                variant={view === "list" ? "dark" : "outline-dark"}
                onClick={() => setView("list")}
              >
                List View
              </Button>
            </ButtonGroup>
          </div>

          {/* Book Display */}
          {view === "card" ? (
            <div className="d-flex mt-3 gap-3 flex-wrap justify-content-center">
              {displayBook.map((book) => (
                <ProductCard
                  key={book._id}
                  author={book.author}
                  title={book.title}
                  imageUrl={book.imageUrl}
                  slug={book.slug}
                />
              ))}
            </div>
          ) : (
            <div className="d-flex flex-column gap-3 mt-3">
              {displayBook.map((book) => (
                <ListViewCard key={book._id} {...book} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="d-flex mt-5 justify-content-center">
            <CustomPagination
              active={active}
              setActive={setActive}
              totalPagination={totalPagination}
            />
          </div>
        </>
      ) : (
        <Alert variant="warning">
          No Book Found. Contact admin for more details...
        </Alert>
      )}
    </Container>
  );
};

export default PublicBookListing;
