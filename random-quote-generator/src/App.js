import React, { useState, useEffect } from 'react';
import quotesData from './quote.json';
import CustomComponent from './customComponent';

function App() {
  const [quote, setQuote] = useState({});
  const [backgroundColorClass, setBackgroundColorIndex] = useState('#3498db');

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () =>{
    const backgroundColors = ['bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger'];

    const backgroundColorIndex = Math.floor(Math.random() * backgroundColors.length);
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    console.log(backgroundColors[backgroundColorIndex]);
    setQuote(quotesData[randomIndex]);
    setBackgroundColorIndex(backgroundColors[backgroundColorIndex]);
  }

  return (
    <CustomComponent quote={quote} generateRandomQuote={generateRandomQuote}  backgroundColorClass={backgroundColorClass} />
  );
}

export default App;
