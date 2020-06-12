import React, { useState } from "react";
import '../App.css';
import { useErrorHandler } from '../errorHandler';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { predefined_Errors } from "../constant";

function Home() {
  const [books, setBooks] = useState({ items: [] });
  const [loading, setLoading] = useState(false);
  const [show, setError] = useErrorHandler({ isError: false, error: {} }, predefined_Errors);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    // set loading Before API operation starts  
    setLoading(true);
    try {
      //change invalid url to test error 
      const result = await axios.get(`${API_URL}?q=${'computer science'}`);
      setBooks(result.data);
      setError([{ isError: false, error: {} }]);
    }
    catch (error) {
      setError([{ isError: true, error: error }]);
    }
    // After API operation end  
    setLoading(false);
  };



  return (
    <div>
      <header className="App-header">
        {show}
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Books Searching</h1>
        <label htmlFor="searchTerm">Search Term</label>
        <input name="searchTerm" placeholder="Term" ref={register({ required: true })} />
        <span style={{ color: "red" }}>{errors.searchTerm && "SearchTerm is required"}</span>



        <input type="submit" value='Search' />
      </form>
      {loading && <div style={{ color: `green`, paddingTop: 50, fontSize: 24, textAlign: "center" }}>fetching books ....</div>}
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div style={{ color: "#fff" }}>
                  <img
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${
                      book.id
                      }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Home;
