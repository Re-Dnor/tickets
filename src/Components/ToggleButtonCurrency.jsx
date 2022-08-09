import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {setCurrency} from '../store/tickets-slice.js';

function ToggleButtonExample() {
  const currencyArray = ['rub', 'usd', 'eur'];
  const [currentCurrency, setCurrentCurrency] = useState('rub');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrency(currentCurrency))
  }, [currentCurrency, dispatch])

  return (
    <ButtonGroup type="checkbox" className='ps-4'>
      {currencyArray.map((btn, index) => 
        <ToggleButton 
          key={index}
          id={index} 
          type="radio"
          variant={currentCurrency === btn ? 'primary' : 'outline-primary'}
          checked={currentCurrency === btn}
          value={btn} 
          onChange={(e) => setCurrentCurrency(e.target.value)}
        >
          {btn.toUpperCase()}
        </ToggleButton>
      )}
    </ButtonGroup>
  );
}

export default ToggleButtonExample;