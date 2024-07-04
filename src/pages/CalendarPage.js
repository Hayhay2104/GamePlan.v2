import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CalendarPage = ({ joinedEvents }) => {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const event = joinedEvents.find(e => new Date(e.date).toLocaleDateString() === date.toLocaleDateString());
      if (event) {
        return (
          <p>
            <strong>{event.sport}</strong> at {event.timeStart}
          </p>
        );
      }
    }
    return null;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>My Calendar</h1>
          <Calendar
            onChange={setValue}
            value={value}
            tileContent={tileContent}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Events on {value.toDateString()}</h2>
          {joinedEvents
            .filter(event => new Date(event.date).toLocaleDateString() === value.toLocaleDateString())
            .map((event, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>{event.sport}</Card.Title>
                  <Card.Text>
                    Time: {event.timeStart} - {event.timeEnd}<br />
                    Location: {event.location}<br />
                    Privacy: {event.privacy}<br />
                    Type: {event.type}<br />
                    Track Score: {event.trackScore ? 'Yes' : 'No'}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarPage;
