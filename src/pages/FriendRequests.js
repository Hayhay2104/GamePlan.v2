
import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const initialFriendRequests = [
  { name: 'Eve Adams', profilePicture: '/imagesSrc/profileplaceholder.png' },
  { name: 'Frank Wilson', profilePicture: '/imagesSrc/profileplaceholder.png' },
];

const FriendRequests = () => {
  const [friendRequests, setFriendRequests] = useState(initialFriendRequests);
  const navigate = useNavigate();
  
  // to add friend 
  const handleAccept = (index) => {
    const acceptedFriend = friendRequests[index];
    
    alert(`${acceptedFriend.name} added to friends!`);
    setFriendRequests(friendRequests.filter((_, i) => i !== index));
  };

  const handleReject = (index) => {
    const rejectedFriend = friendRequests[index];
    alert(`${rejectedFriend.name}'s request rejected!`);
    setFriendRequests(friendRequests.filter((_, i) => i !== index));
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <Container>
      <h1>Friend Requests</h1>
      {friendRequests.length === 0 ? (
        <p>No friend requests.</p>
      ) : (
        friendRequests.map((request, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Row>
                <Col md={2}>
                  <Card.Img src={request.profilePicture} alt={request.name} />
                </Col>
                <Col md={8}>
                  <Card.Title>{request.name}</Card.Title>
                </Col>
                <Col md={2} className="d-flex align-items-center justify-content-end">
                  <Button variant="success" onClick={() => handleAccept(index)} className="mr-2">
                    <FaCheck />
                  </Button>
                  <Button variant="danger" onClick={() => handleReject(index)}>
                    <FaTimes />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}
      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
    </Container>
  );
};

export default FriendRequests;
