import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import PublicBookListing from "../components/publicBookList/PublicBookListing";
import { Container } from "react-bootstrap";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const searchstr = searchParams.get("query");
  const { publicBookList } = useSelector((state) => state.bookInfo);
  const searchBooks = publicBookList?.filter((book) =>
    book.title.toLowerCase().includes(searchstr.toLowerCase())
  );
  const navigate = useNavigate();
  useEffect(() => {
    !searchBooks.length > 0 && navigate("/all-books");
  }, [searchBooks.length, navigate]);

  return (
    <Container className="py-5">
      <PublicBookListing books={searchBooks}></PublicBookListing>
    </Container>
  );
};
