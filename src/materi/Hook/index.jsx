import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Container, Form, Navbar, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

import GetNews from "../LifeCycle/GetNews";

const Main = () => {
  const [initialData, setInitialData] = useState({
    data: [],
  });

  const [keySearch, setKeySearch] = useState("");
  const [msgErr, setMsgErr] = useState("");

  useEffect(() => getData(), [keySearch]);

  const getData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?language=id&q=` +
          keySearch +
          `&sortBy=publishedAt&apiKey=60f03c3fdb2a400d91aade0b50a5715f`
      )
      .then((result) => {
        setInitialData({
          data: result.data.articles,
        });
        if (result.data.articles.length === 0) {
          setMsgErr("Tidak ada berita");
        } else {
          setMsgErr("");
        }
        // console.log(keySearch);
      })
      .catch((error) => setMsgErr(error));
  };

  let searchNews = (e) => {
    setKeySearch(e.target.value);
  };

  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">News</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Form>
          <Form.Control
            type="text"
            placeholder="Search..."
            id="search-input"
            onChange={searchNews}
          />
        </Form>
        <p className="text-muted text-center">{msgErr}</p>
        <Row>
          {initialData.data.map((data) => {
            return (
              <GetNews
                key={data.url}
                urlToImage={data.urlToImage}
                url={data.url}
                title={data.title}
                author={data.author}
                publishedAt={data.publishedAt}
                description={data.description}
              ></GetNews>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Main;
