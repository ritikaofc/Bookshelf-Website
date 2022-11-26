import React from "react";
import "./Help.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Help = () => {
  return (
    <>
      <div className="App-header">
        <h1>How can we help</h1>
      </div>
      <div className="sell">
        <div>
          <Card.Body>
            <Card.Title>
              <h2>Contact us</h2>
            </Card.Title>
            <Card.Text>
              <p>Phone Number: 900900900</p>
              <p>Email: bookshelf@gmail.com</p>
            </Card.Text>
          </Card.Body>
        </div>
        <div>
          <Card.Body>
            <Card.Title>
              <h2>Register</h2>
            </Card.Title>
            <Card.Text>Register to know more about us!</Card.Text>
            <Button className="btn">Register Here</Button>
          </Card.Body>
        </div>
        <Card.Body>
          <Card.Title>
            <h2>Post your Ad</h2>
          </Card.Title>
          <Card.Text>Post an advertisment to sell your books.</Card.Text>
        </Card.Body>
      </div>
    </>
  );
};

export default Help;
