import React, { useState } from "react";
import  {useSelector } from "react-redux";
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import _ from 'lodash';
import { getImage } from '../helpers/getImage.js';
import { getTransplantCount, makeDate } from '../helpers/getData.js'
import CurrencyButton from "./CurrencyButton.jsx";
import ModalTicket from './ModalTicket.jsx';

function TicketList() {
  const {ticketList, filter} = useSelector((state) => state.tickets);
  const filteredTicketList = ticketList.filter((ticket) => filter.includes(ticket.stops)).sort((a,b) => a.price - b.price);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Col className="d-flex flex-column h-100 p-0">
        <div
          className="h-100 chat-messages overflow-auto text-break px-5"
          id="messages-box"
        >
          {filteredTicketList.map((ticket) => 
            <Card className="mb-4" key={_.uniqueId('card_')}>
              <Card.Body className='d-flex justify-content-center'>
                <div className="col-md-4 row m-2 p-2">
                  <Card.Img variant="left" width={'150px'} src={getImage[ticket.carrier]} alt="Airlines" />
                  <CurrencyButton ticket={ticket} setShowModal={setShowModal} />
                </div>
                <div className="row">
                  <Card.Title>
                    {ticket.departure_time} &#8211; {ticket.arrival_time}
                  </Card.Title>
                  <Card.Text>
                  {ticket.origin}, {ticket.origin_name} &#8211;&gt; {ticket.destination_name}, {ticket.destination}
                  </Card.Text>
                  <Card.Text>
                    {makeDate(ticket.departure_date)} &gt; {makeDate(ticket.arrival_date)}
                  </Card.Text>
                  <Card.Text>
                    {getTransplantCount(ticket.stops)}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </Col>
      {showModal && <ModalTicket show={showModal} setShow={setShowModal}/>}
    </>
  )
}

export default TicketList;