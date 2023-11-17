import React from 'react';

function CustomComponent({ quote, generateRandomQuote , backgroundColorClass}) {
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;
  return (
    <div className={`d-flex align-items-center justify-content-center ${backgroundColorClass}`} style={{ minHeight: '100vh'  }}>
    <div className="container-xl border border-primary p-xl-4 justify-content-center rounded-0"style={{ backgroundColor: '#eedd82'}}>
      <h1 className="display-4">Random Quote Generator</h1>
      <p className="lead">{quote.text} </p>
      <p className="blockquote-footer"> {quote.author}</p>

      <button className="btn btn-primary" onClick={generateRandomQuote}>New Quote</button>
      <a
          className="btn btn-info ml-2"
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter
        </a>
       
    </div>
    </div>
  );
}

export default CustomComponent;
