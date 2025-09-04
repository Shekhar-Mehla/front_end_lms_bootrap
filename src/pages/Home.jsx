import React, { useEffect, useState } from "react";
import Hero from "../components/pageSections/homePageSection/Hero";
import JustIn from "../components/pageSections/homePageSection/JustIn";
import BestRead from "../components/pageSections/homePageSection/BestRead";
import Recomdation from "../components/pageSections/homePageSection/Recomdation";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { publicBookActions } from "../feature/books/bookActions";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(publicBookActions());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="home-container">
      {loading ? (
        <div
          className="d-flex flex-column justify-content-center align-items-center py-5"
          style={{ minHeight: "80vh" }}
        >
          <Spinner animation="border" role="status" />
          <div className="mt-2">Please wait...</div>
        </div>
      ) : (
        <Container>
          <Hero />
          <JustIn />
          <BestRead />
          <Recomdation />
        </Container>
      )}
    </div>
  );
};

export default Home;
