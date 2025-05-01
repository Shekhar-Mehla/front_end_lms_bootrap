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
    <Container>
      {displayBook.length > 0 ? (
        <>
          <div className="d-flex justify-content-between">
            <div>{books.length} book found</div>
            <div>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => setView("card")}>
                  Card View
                </Button>
                <Button variant="dark" onClick={() => setView("list")}>
                  List View
                </Button>
              </ButtonGroup>
            </div>
          </div>{" "}
          {view === "card" ? (
            <>
              <div className="d-flex mt-3 gap-3 flex-wrap justify-content-center">
                {displayBook?.map((book) => {
                  return (
                    <ProductCard
                      key={book._id}
                      author={book.author}
                      title={book.title}
                      imageUrl={book.imageUrl}
                      slug={book.slug}
                    ></ProductCard>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {" "}
              <div
                className={`d-flex gap-3  mt-3 flex-wrap   flex-column
    }   justify-content-center`}
              >
                {displayBook?.map((book) => {
                  return <ListViewCard key={book._id} {...book}></ListViewCard>;
                })}
              </div>
            </>
          )}
          <div className="d-flex mt-5 justify-content-center">
            <CustomPagination
              active={active}
              setActive={setActive}
              totalPagination={totalPagination}
            ></CustomPagination>
          </div>
        </>
      ) : (
        <Alert> No Book Found. contact admin for more details...</Alert>
      )}
    </Container>
  );
};

export default PublicBookListing;
