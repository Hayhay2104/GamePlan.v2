import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddFriend = () => {
  const navigate = useNavigate();
  //serach friends
  const handleSearch = (e) => {
    e.preventDefault();
    alert('Friend searched!');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <Container>
      <h1>Add Friend</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formSearch">
          <Form.Label>Search for Friends</Form.Label>
          <Form.Control type="text" placeholder="Enter name or email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button variant="secondary" onClick={handleCancel} className="ml-2">
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default AddFriend;
