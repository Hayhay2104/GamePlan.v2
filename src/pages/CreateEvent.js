import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    date: '',
    time: '',
    location: '',
    participants: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle event creation
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTime">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          name="time"
          value={eventDetails.time}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={eventDetails.location}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formParticipants">
        <Form.Label>Participants</Form.Label>
        <Form.Control
          type="text"
          name="participants"
          value={eventDetails.participants}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Event
      </Button>
    </Form>
  );
};

export default CreateEvent;
