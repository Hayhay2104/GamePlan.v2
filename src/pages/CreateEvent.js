import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const sports = [
  { name: 'Soccer', image: '/images/soccerball.png', maxPlayers: 12 },
  { name: 'Basketball', image: '/images/basketball.png', maxPlayers: 10 },
  { name: 'Tennis', image: '/images/tennisball.png', maxPlayers: 4 },
];

const CreateEvent = ({ onCreateEvent }) => {
  const [eventDetails, setEventDetails] = useState({
    date: '',
    timeStart: '',
    timeEnd: '',
    location: '',
    currentPlayers: '',
    maxPlayers: '',
    sport: 'Soccer',
    privacy: 'Public',
    type: 'Friendly',
    trackScore: false,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...eventDetails,
      date: selectedDate.toISOString().split('T')[0]
    };
    onCreateEvent(newEvent);
    alert('Event Created Successfully!');
    navigate('/events');
  };

  const handleCancel = () => {
    navigate('/events');
  };

  return (
    <Container>
      <h1>Create Event Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSport">
          <Form.Label>Sport</Form.Label>
          <Form.Control
            as="select"
            name="sport"
            value={eventDetails.sport}
            onChange={handleChange}
          >
            {sports.map((sport, index) => (
              <option key={index} value={sport.name}>{sport.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCurrentPlayers">
          <Form.Label>Current Players</Form.Label>
          <Form.Control
            type="number"
            name="currentPlayers"
            value={eventDetails.currentPlayers}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMaxPlayers">
          <Form.Label>Max Players</Form.Label>
          <Form.Control
            type="number"
            name="maxPlayers"
            value={eventDetails.maxPlayers}
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

        <Form.Group controlId="formTimeStart">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            name="timeStart"
            value={eventDetails.timeStart}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formTimeEnd">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="time"
            name="timeEnd"
            value={eventDetails.timeEnd}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrivacy">
          <Form.Label>Privacy</Form.Label>
          <Form.Control
            as="select"
            name="privacy"
            value={eventDetails.privacy}
            onChange={handleChange}
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formType">
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            name="type"
            value={eventDetails.type}
            onChange={handleChange}
          >
            <option value="Friendly">Friendly</option>
            <option value="Competitive">Competitive</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formTrackScore">
          <Form.Check
            type="checkbox"
            label="Track Score"
            name="trackScore"
            checked={eventDetails.trackScore}
            onChange={handleCheckboxChange}
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Select Date</Form.Label>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirm
        </Button>
        <Button variant="secondary" onClick={handleCancel} className="ml-2">
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default CreateEvent;
