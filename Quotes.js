import React from "react";

const Quotes = ({ quotes, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return quotes.map((bookq) => {
    const n = String(bookq.author);
    return (
      <div className="bookq">
        <div className="detailsq">
          <p>Name: {n}</p>
          <p>Quote: {bookq.quote}</p>
        </div>
      </div>
    );
  });
};

export default Quotes;
