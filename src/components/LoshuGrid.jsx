import React from 'react';
import { useLocation } from 'react-router-dom';
import './LoshuGrid.css';

const LoshuGrid = () => {
  const location = useLocation();
  const { name, dob, dobDigits } = location.state || {};

  
  const digitCount = Array(10).fill(0);
  dobDigits?.forEach(d => {
    if (d >= 1 && d <= 9) digitCount[d]++;
  });

 
  const sum = dobDigits?.reduce((acc, val) => acc + val, 0) || 0;

 
  const reduceToSingleDigit = (n) => {
    while (n > 9) {
      n = n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return n;
  };


  const day = new Date(dob).getDate();
  const mulank = day < 10 ? day : day.toString().split('').map(Number).reduce((a, b) => a + b);

  const lifePath = reduceToSingleDigit(sum);

  if (mulank >= 1 && mulank <= 9) digitCount[mulank]++;
  if (lifePath >= 1 && lifePath <= 9) digitCount[lifePath]++;

  const gridOrder = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
  ];

  return (
    <div className='loshuContainer'>
      <div className='birthProfile'>
        <p><strong>name: </strong> {name}</p>
        <p><strong>dob: </strong> {dob}</p>
        <p><strong>mulank: </strong> {mulank}</p>
        <p><strong>life path number: </strong> {lifePath}</p>
        
      </div>

      <div className='displayGrid'>
        {gridOrder.map((row, rowIndex) => (
          <div key={rowIndex} className='gridRow'>
            {row.map((num, i) => (
              <div key={i} className='gridCell'>
                <div className='cellNumber'>{num}</div>
                <div className='cellCount'>
                  {digitCount[num] > 0 ? String(num).repeat(digitCount[num]) : '-'}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <footer>by: maithili mukherjee</footer>
    </div>
  );
};

export default LoshuGrid;
