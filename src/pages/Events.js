import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; 

import soccerball from '../imagesSrc/soccerball.png';
import basketball from '../imagesSrc/basketball.png';
import tennisball from '../imagesSrc/tennisball.png';

const sports = [
  { name: 'Soccer', image: soccerball, maxPlayers: 12 },
  { name: 'Basketball', image: basketball, maxPlayers: 10 },
  { name: 'Tennis', image: tennisball, maxPlayers: 4 },
];

const Events = ({ events, onJoinEvent, onLeaveEvent, joinedEvents }) => {
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
    setFilteredEvents([...filteredEvents].sort((a, b) => a.participants - b.participants));
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
              <Card.Img variant="top" src={sport.image} alt={sport.name} className="sport-img" />
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
                  <img src={sports.find(sport => sport.name === event.sport).image} alt={event.sport} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  Date: <strong>{event.date}</strong><br />
                  Time: <strong>{event.timeStart} - {event.timeEnd}</strong><br />
                  Location: <strong>{event.location}</strong><br />
                  Players: <strong>{event.participants}/{event.maxPlayers}</strong><br />
                  Privacy: <strong>{event.privacy}</strong><br />
                  Type: <strong>{event.type}</strong><br />
                  Track Score: <strong>{event.trackScore ? 'Yes' : 'No'}</strong>
                </Card.Text>
                {!joinedEvents.find(e => e.date === event.date && e.sport === event.sport) ? (
                  <Button variant="primary" className="mr-2" onClick={() => onJoinEvent(event)}>Join</Button>
                ) : (
                  <Button variant="danger" className="mr-2" onClick={() => onLeaveEvent(event)}>Leave</Button>
                )}
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
