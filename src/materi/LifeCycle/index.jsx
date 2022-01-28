import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Container, Form, Navbar, Row } from "react-bootstrap";
import GetNews from "./GetNews";

class Main extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       data: [],
  //     };
  //   }

  state = {
    data: [],
    keySearch: "",
    errMessage: "",
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?language=id&q=` +
          this.state.keySearch +
          `&sortBy=publishedAt&apiKey=60f03c3fdb2a400d91aade0b50a5715f`
      )
      .then((result) => {
        this.setState({
          data: result.data.articles,
        });
        if (result.data.totalResults === 0) {
          this.setState({
            errMessage: "Tidak ada berita",
          });
        }
      })
      .catch((error) => {
        this.setState({
          errMessage: "Error : " + error,
        });
      });
  }

  searchNews = (e) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?language=id&q=` +
          e.target.value +
          `&sortBy=publishedAt&apiKey=0771ac00dcb0427e8d225a99b863c776`
      )
      .then((result) => {
        this.setState({
          data: result.data.articles,
        });
        if (result.data.totalResults === 0) {
          this.setState({
            errMessage: "Tidak ada berita",
          });
        } else {
          this.setState({
            errMessage: "",
          });
        }
      })
      .catch((error) => {
        this.setState({
          errMessage: "Error : " + error,
        });
      });
  };

  render() {
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
              onChange={this.searchNews}
            />
          </Form>
          <p className="text-muted text-center">{this.state.errMessage}</p>
          <Row>
            {this.state.data.map((data) => {
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
  }
}

export default Main;
