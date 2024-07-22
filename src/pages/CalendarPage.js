import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CalendarPage = ({ joinedEvents }) => {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const event = joinedEvents.find(e => {
        const eventDate = new Date(e.date);
        return eventDate.toISOString().split('T')[0] === date.toISOString().split('T')[0];
      });
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
          <h1 className="text-center">My Calendar</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="d-flex justify-content-center">
            <Calendar
              onChange={setValue}
              value={value}
              tileContent={tileContent}
              className="w-100" //calendar width
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Events on {value.toDateString()}</h2>
          {joinedEvents
            .filter(event => {
              const eventDate = new Date(event.date);
              return eventDate.toISOString().split('T')[0] === value.toISOString().split('T')[0];
            })
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
