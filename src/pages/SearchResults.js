import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = ({ events }) => {
  const query = useQuery();
  const searchQuery = query.get('query');

  const filteredEvents = events.filter(event => {
    return (
      event.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Container>
      <h1>Search Results</h1>
      <p>Results for: <strong>{searchQuery}</strong></p>
      <Row>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="my-3">
              <Card>
                <Card.Body>
                  <Card.Title>{event.sport}</Card.Title>
                  <Card.Text>
                    <strong>Date:</strong> {event.date}<br />
                    <strong>Location:</strong> {event.location}<br />
                    <strong>Time:</strong> {event.timeStart} - {event.timeEnd}<br />
                    <strong>Type:</strong> {event.type}<br />
                    <strong>Privacy:</strong> {event.privacy}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Row>
    </Container>
  );
};

export default SearchResults;
