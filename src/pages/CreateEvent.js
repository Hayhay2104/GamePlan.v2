import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import soccerball from '../imagesSrc/soccerball.png';
import basketball from '../imagesSrc/basketball.png';
import tennisball from '../imagesSrc/tennisball.png';

const sports = [
  { name: 'Soccer', image: soccerball, maxPlayers: 12 },
  { name: 'Basketball', image: basketball, maxPlayers: 10 },
  { name: 'Tennis', image: tennisball, maxPlayers: 4 },
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
    const correctedDate = new Date(selectedDate);
    correctedDate.setHours(12, 0, 0, 0);
  
    const newEvent = {
      ...eventDetails,
      date: correctedDate.toISOString().split('T')[0]
    };
    onCreateEvent(newEvent);
    alert('Event Created Successfully!');
    navigate('/events');
  };

  const handleCancel = () => {
    navigate('/events');
  };

  const renderTooltip = (text) => (
    <Tooltip>{text}</Tooltip>
  );

  return (
    <Container>
      <h1>Create Event Page</h1>
      <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <OverlayTrigger placement="right" overlay={renderTooltip("Select the sport for the event.")}>
          <Form.Group controlId="formSport" className="w-75">
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
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Enter the current number of players.")}>
          <Form.Group controlId="formCurrentPlayers" className="w-75">
            <Form.Label>Current Players</Form.Label>
            <Form.Control
              type="number"
              name="currentPlayers"
              value={eventDetails.currentPlayers}
              onChange={handleChange}
            />
          </Form.Group>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Enter the maximum number of players.")}>
          <Form.Group controlId="formMaxPlayers" className="w-75">
            <Form.Label>Max Players</Form.Label>
            <Form.Control
              type="number"
              name="maxPlayers"
              value={eventDetails.maxPlayers}
              onChange={handleChange}
            />
          </Form.Group>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Enter the location of the event.")}>
          <Form.Group controlId="formLocation" className="w-75">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={eventDetails.location}
              onChange={handleChange}
            />
          </Form.Group>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Select the start time for the event.")}>
          <Form.Group controlId="formTimeStart" className="w-75">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="time"
              name="timeStart"
              value={eventDetails.timeStart}
              onChange={handleChange}
            />
          </Form.Group>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Select the end time for the event.")}>
          <Form.Group controlId="formTimeEnd" className="w-75">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="time"
              name="timeEnd"
              value={eventDetails.timeEnd}
              onChange={handleChange}
            />
          </Form.Group>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Select the privacy level for the event.")}>
          <Form.Group controlId="formPrivacy" className="w-75">
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
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Select the type of event.")}>
          <Form.Group controlId="formType" className="w-75">
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
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Check if you want to track the score.")}>
          <Form.Group controlId="formTrackScore" className="w-75">
            <Form.Check
              type="checkbox"
              label="Track Score"
              name="trackScore"
              checked={eventDetails.trackScore}
              onChange={handleCheckboxChange}
            />
          </Form.Group>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Select the date for the event.")}>
          <Form.Group controlId="formDate" className="w-75">
            <Form.Label>Select Date</Form.Label>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
            />
          </Form.Group>
        </OverlayTrigger>

        <Button variant="primary" type="submit" className="m-2">
          Confirm
        </Button>
        <Button variant="secondary" onClick={handleCancel} className="m-2">
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default CreateEvent;
