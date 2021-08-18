import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="row">
      {/* Display data from API */}
      <div className="books">
        {posts.map((book, index) => {
          const cleanedDate = new Date(book.birthday).toDateString();
          const iaddr = String(book.img);
          return (
            <div className="book" id="about" key={index}>
              <div className="details">
                <div id="myUL">
                  <p>Name: {book.name}</p>
                </div>
                <div className="fakeimg">
                  <img
                    src={iaddr}
                    alt="Character pic"
                    width="200"
                    height="200"
                  ></img>
                </div>
                <p>DOB: {cleanedDate}</p>
                <p>Occupation: {String(book.occupation).split(", ")}</p>
                <p>Status: {book.status}</p>
                <p>Nickname: {book.nickname}</p>
                <p>Portrayed: {book.portrayed}</p>
                <p>Season: {book.appearance}</p>
                <p>Category: {book.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
