import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Events from './pages/Events';
import CalendarPage from './pages/CalendarPage';
import AddFriend from './pages/AddFriend';
import FriendRequests from './pages/FriendRequests';
import Footer from './components/Footer';

import soccerball from './imagesSrc/soccerball.png';
import basketball from './imagesSrc/basketball.png';
import tennisball from './imagesSrc/tennisball.png';

const sports = [
  { name: 'Soccer', image: soccerball, maxPlayers: 12 },
  { name: 'Basketball', image: basketball, maxPlayers: 10 },
  { name: 'Tennis', image: tennisball, maxPlayers: 4 },
];

const defaultEvents = [
  {
    date: '2024-07-15',
    timeStart: '10:00 AM',
    timeEnd: '11:00 AM',
    location: 'City Park',
    sport: 'Soccer',
    participants: 8,
    maxPlayers: 12,
    privacy: 'Public',
    type: 'Friendly',
    trackScore: false,
    image: soccerball
  },
  {
    date: '2024-07-18',
    timeStart: '2:00 PM',
    timeEnd: '3:00 PM',
    location: 'Community Center',
    sport: 'Basketball',
    participants: 6,
    maxPlayers: 10,
    privacy: 'Public',
    type: 'Friendly',
    trackScore: false,
    image: basketball
  },
  {
    date: '2024-07-20',
    timeStart: '5:00 PM',
    timeEnd: '6:00 PM',
    location: 'Local Courts',
    sport: 'Tennis',
    participants: 2,
    maxPlayers: 4,
    privacy: 'Public',
    type: 'Friendly',
    trackScore: false,
    image: tennisball
  },
];

function App() {
  const [events, setEvents] = useState(defaultEvents);
  const [joinedEvents, setJoinedEvents] = useState([]);

  const handleJoinEvent = (event) => {
    const updatedEvent = {
      ...event,
      date: new Date(event.date).toISOString().split('T')[0], // Ensure correct date format
    };
    setJoinedEvents([...joinedEvents, updatedEvent]);
    alert(`You joined ${event.sport} at ${event.timeStart}`);
  };

  const handleLeaveEvent = (event) => {
    setJoinedEvents(joinedEvents.filter(e => e.date !== event.date || e.sport !== event.sport));
    alert(`You left ${event.sport} at ${event.timeStart}`);
  };

  const handleCreateEvent = (newEvent) => {
    const sportDetails = {
      ...newEvent,
      date: new Date(newEvent.date).toISOString().split('T')[0], // Ensure correct date format
      image: sports.find(sport => sport.name === newEvent.sport).image,
    };
    setEvents([...events, sportDetails]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent onCreateEvent={handleCreateEvent} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/events" element={<Events events={events} onJoinEvent={handleJoinEvent} onLeaveEvent={handleLeaveEvent} joinedEvents={joinedEvents} />} />
          <Route path="/calendar" element={<CalendarPage joinedEvents={joinedEvents} />} />
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/friend-requests" element={<FriendRequests />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
