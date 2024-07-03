
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div>
      <ListGroup>
        {messages.map((msg, index) => (
          <ListGroup.Item key={index}>{msg}</ListGroup.Item>
        ))}
      </ListGroup>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleSend}>Send</Button>
      </Form>
    </div>
  );
};

export default Chat;
