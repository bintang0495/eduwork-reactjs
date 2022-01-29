import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Container, Form, Navbar, Row } from "react-bootstrap";
import BuGetNews from "./BuGetNews";

class BuMain extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       data: [],
  //     };
  //   }
  // Testing untuk nambah komen

  state = {
    data: [],
    keySearch: "",
    errMessage: "",
    isEnabled: true,
  };

  componentDidMount() {
    axios
      .get(
        // `https://newsapi.org/v2/top-headlines?language=id&q=` +
        //   this.state.keySearch +
        //   `&sortBy=publishedAt&apiKey=60f03c3fdb2a400d91aade0b50a5715f`
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      )
      .then((result) => {
        this.setState({
          data: result.data,
        });
        // if (result.data.totalResults === 0) {
        //   this.setState({
        //     errMessage: "Tidak ada berita",
        //   });
        // }
        console.log(result.data);
      })
      .catch((error) => {
        // this.setState({
        //   errMessage: "Error : " + error,
        // });
        console.log(error);
      });
  }

  searchNews = (e) => {
    this.setState({
      keyword: e.target.value,
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
                <BuGetNews
                  key={data.id}
                  title={data.title}
                  thumbnailUrl={data.thumbnailUrl}
                ></BuGetNews>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BuMain;
