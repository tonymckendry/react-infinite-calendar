import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from '../../src';
import '../../styles.css';
import './demo.css';

render(
  <InfiniteCalendar
    width={Math.min(window.innerWidth, 400)}
    height={600}
    showHeader={false}
    onDayClick={(day) => {
      console.log('day was clicked')
      console.log(day)
    }}
  />
  , document.querySelector('#demo'));
