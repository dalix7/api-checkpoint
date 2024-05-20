import React from "react";
import { Button, Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          marginBottom: "5%",
          padding: "0.5rem",
          boxShadow: "00px 0px 20px -5px",

          backgroundColor: "darkgray",
        }}
      >
        <Card.Img
          variant="top"
          src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
