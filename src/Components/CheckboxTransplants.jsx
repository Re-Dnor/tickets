import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import Form from 'react-bootstrap/Form';
import {setFilter} from '../store/tickets-slice.js';
import _ from 'lodash';
import getStops from '../helpers/getStopsCount.js';

function CheckboxTransplants() {
  const dispatch = useDispatch();
  const [checked, setCheked] = useState({
    all:true,
    zero: false,
    one: false,
    two: false,
    three: false,
  });
  const chekedKeys = Object.keys(checked);

  const handleChangeCheckbox = (e) => {
    console.log(e.target)
    const name = e.target.name
    setCheked(
      { ...checked,
        [name]: e.currentTarget.checked 
      })
  };

  useEffect(() => {
    dispatch(setFilter(checked));
  }, [checked])

  return ( 
    <div className="ps-4">
    <Form>
      {chekedKeys.map((key) => 
      <Form.Check 
      key={_.uniqueId('checkbox_')}
      type={'checkbox'}
      value={key}
      checked={checked[key]}
      id={_.uniqueId('checkbox_')}
      label={getStops[key]}
      name={key}
      onChange={handleChangeCheckbox}
      />
      )}
    </Form>
  </div>


  );
}

export default CheckboxTransplants;