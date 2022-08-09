import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row } from 'react-bootstrap';
import TicketList from "./TicketList";
import Menu from "./Menu.jsx";
import { loadTickets } from '../store/tickets-slice.js'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTickets());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column h-100">
      <Container className="container h-100 my-4 overflow-hidden rounded shadow">
        <Row className="h-100 bg-white flex-md-row">
          <Menu />
          <TicketList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
