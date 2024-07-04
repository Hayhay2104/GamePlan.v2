import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    location: 'New York, USA',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    matchHistory: [
      { sport: 'Soccer', score: '3-1', result: 'Win' },
      { sport: 'Basketball', score: '46-57', result: 'Lose' }
    ],
    friends: ['Alice Smith', 'Bob Johnson', 'Charlie Brown']
  });

  const [newFriend, setNewFriend] = useState('');
  const [friendRequests, setFriendRequests] = useState(['David Johnson', 'Laura Lee']);
  const [showRequests, setShowRequests] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleAddFriend = () => {
    setProfile({
      ...profile,
      friends: [...profile.friends, newFriend]
    });
    setNewFriend('');
  };

  const handleAcceptRequest = (friend) => {
    setFriendRequests(friendRequests.filter(request => request !== friend));
    setProfile({
      ...profile,
      friends: [...profile.friends, friend]
    });
  };

  const handleDeclineRequest = (friend) => {
    setFriendRequests(friendRequests.filter(request => request !== friend));
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="/images/profileplaceholder.png" />
              {editing ? (
                <div>
                  <Card.Title>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </Card.Title>
                  <Card.Text>
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleChange}
                    />
                  </Card.Text>
                  <Card.Text>
                    Email: <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </Card.Text>
                  <Card.Text>
                    Phone: <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </Card.Text>
                  <Button onClick={handleSave}>Save</Button>
                </div>
              ) : (
                <div>
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text>{profile.location}</Card.Text>
                  <Card.Text>Email: {profile.email}</Card.Text>
                  <Card.Text>Phone: {profile.phone}</Card.Text>
                  <Button onClick={handleEdit}>Edit</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h2>History of Previous Matches</h2>
          {profile.matchHistory.map((match, index) => (
            <p key={index}>{match.sport} ({match.score}) {match.result}</p>
          ))}

          <h2>Friends List</h2>
          {profile.friends.map((friend, index) => (
            <Card key={index} className="mb-2">
              <Card.Body>
                <img src="/images/profileplaceholder.png" alt="friend" style={{ width: '30px', marginRight: '10px' }} />
                {friend}
              </Card.Body>
            </Card>
          ))}

          <Button variant="primary" className="mr-2" onClick={handleAddFriend}>Add Friend</Button>
          <input
            type="text"
            value={newFriend}
            onChange={(e) => setNewFriend(e.target.value)}
            placeholder="Enter friend's name"
          />
          <Button variant="secondary" className="ml-2" onClick={() => setShowRequests(!showRequests)}>Requests</Button>

          {showRequests && (
            <div>
              <h2>Friend Requests</h2>
              {friendRequests.map((friend, index) => (
                <Card key={index} className="mb-2">
                  <Card.Body>
                    <img src="/images/profileplaceholder.png" alt="friend" style={{ width: '30px', marginRight: '10px' }} />
                    {friend}
                    <Button variant="success" className="ml-2" onClick={() => handleAcceptRequest(friend)}>Accept</Button>
                    <Button variant="danger" className="ml-2" onClick={() => handleDeclineRequest(friend)}>Decline</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
