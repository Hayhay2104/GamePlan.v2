import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; 

const sports = [
  { name: 'Soccer', image: '/images/soccerball.png', maxPlayers: 12 },
  { name: 'Basketball', image: '/images/basketball.png', maxPlayers: 10 },
  { name: 'Tennis', image: '/images/tennisball.png', maxPlayers: 4 },
];

const Events = ({ events, onJoinEvent }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedSport, setSelectedSport] = useState('All');

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);

  const filterBySport = (sport) => {
    setSelectedSport(sport);
    if (sport === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.sport === sport));
    }
  };

  const sortByDate = () => {
    setFilteredEvents([...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date)));
  };

  const sortByPlayers = () => {
    setFilteredEvents([...filteredEvents].sort((a, b) => a.currentPlayers - b.currentPlayers));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <h2>Sports</h2>
          <Card onClick={() => filterBySport('All')} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>All</Card.Title>
            </Card.Body>
          </Card>
          {sports.map((sport, index) => (
            <Card key={index} onClick={() => filterBySport(sport.name)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={sport.image} alt={sport.name} />
              <Card.Body>
                <Card.Title>{sport.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={9}>
          <Row className="mb-3">
            <Col>
              <h2>Upcoming Games</h2>
            </Col>
            <Col className="text-right">
              <ButtonGroup>
                <Button variant="primary" onClick={sortByDate} className="btn-spacing">Sort by Date</Button>
                <Button variant="primary" onClick={sortByPlayers} className="btn-spacing">Sort by Players</Button>
                <Button variant="dark" as={Link} to="/create-event">Create Event</Button>
              </ButtonGroup>
            </Col>
          </Row>
          {filteredEvents.map((event, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{event.sport}</Card.Title>
                <Card.Text>
                  <img src={event.image} alt={event.sport} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  Date: {new Date(event.date).toLocaleDateString()}<br />
                  Time: {event.timeStart} - {event.timeEnd}<br />
                  Location: {event.location}<br />
                  Players: {event.currentPlayers}/{event.maxPlayers}<br />
                  Privacy: {event.privacy}<br />
                  Type: {event.type}<br />
                  Track Score: {event.trackScore ? 'Yes' : 'No'}
                </Card.Text>
                <Button variant="primary" className="mr-2" onClick={() => onJoinEvent(event)}>Join</Button>
                <Button variant="secondary">Share</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
