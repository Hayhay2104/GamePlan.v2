import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUsers, FaPlay, FaCheckCircle, FaUserFriends } from 'react-icons/fa';
import logo from '../imagesSrc/logo.png';

const features = [
  { icon: <FaCalendarAlt size={50} />, title: 'Easy Scheduling' },
  { icon: <FaUsers size={50} />, title: 'Join Local Games' },
  { icon: <FaPlay size={50} />, title: 'Track Scores' },
  { icon: <FaUserFriends size={50} />, title: 'Meet New Players' },
];

const testimonials = [
  { quote: 'GamePlan is amazing!', name: 'John Williams' },
  { quote: 'I love how easy it is to join games.', name: 'Jayden Smith' },
];

const Home = () => {
  return (
    <Container className="App-header text-center">
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to GamePlan</h1>
      <p>
        Your all-in-one hub for planning and joining local sports matches. Whether you're a passionate soccer player, a weekend basketball enthusiast, or a casual tennis player, GamePlan makes it easy for you to connect with others.
      </p>
      <p>
        Play and meet new players now.
      </p>
      <Button variant="primary" as={Link} to="/events">Play</Button>

      {}
      <Row className="mt-5">
        <Col>
          <h2>Why Choose GamePlan?</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {features.map((feature, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="text-center my-3">
            {feature.icon}
            <h4>{feature.title}</h4>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Upcoming Events</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">

        <Col xs={12} md={6} lg={3} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Soccer Match</Card.Title>
              <Card.Text>
                <strong>Date:</strong> July 25, 2024<br />
                <strong>Location:</strong> City Park<br />
                <strong>Players:</strong> 8/12
              </Card.Text>
              <Button variant="primary">Join</Button>
            </Card.Body>
          </Card>
        </Col>
        {}
      </Row>

      {}
      <Row className="mt-5">
        <Col>
          <h2>What Our Users Say</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="my-3">
            <Card>
              <Card.Body>
                <Card.Text>"{testimonial.quote}"</Card.Text>
                <Card.Footer>- {testimonial.name}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
