import React, { Component } from 'react';
import BookList from './../containers/bookList';
import BookDetail from './../containers/bookDetail';
import {Container, Row, Col} from "reactstrap";
import { AppInterface } from './styledapp';





export default class App extends Component {
  render() {
    return (
      <AppInterface>
        <Container>
          <Row>
            <Col>
              <Col md={5}>
                <BookList/>
              </Col>
              <Col md={7}>
                <BookDetail/>
              </Col>

            </Col>
          </Row>
        </Container>
      </AppInterface>
    );
  }
}
