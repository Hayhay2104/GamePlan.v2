import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../imagesSrc/logo.png';

const Home = () => {
  return (
    <Container className="App-header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to GamePlan</h1>
      <p>
        Your all-in-one hub for planning and joining local sports matches. Whether you're a passionate soccer player, a weekend basketball enthusiast, or a casual tennis player, GamePlan makes it easy for you to connect with others.
      </p>
      <p>
        Play and meet new players now.
      </p>
      <Button variant="primary" as={Link} to="/events">Play</Button>
    </Container>
  );
};

export default Home;
