import React from "react";
import { Col } from 'react-bootstrap';
import ToggleButtonCurrency from './ToggleButtonCurrency.jsx';
import CheckboxTransplants from './CheckboxTransplants';

function Menu() {
    return (
      <Col className="col-4 col-md-3 border-end pt-5 px-0">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2 align-text-bottom">
        <h5>Валюта</h5>
      </div>
      <ToggleButtonCurrency />
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2 mt-3 align-text-bottom">
        <h5>Количество пересадок</h5>
      </div>
      <CheckboxTransplants/>
    </Col>
    );
}

export default Menu;