import React from "react";
import './SearchStyles.css'; 
import gold from '../../assets/gold.jpg';

function Search() {
  return (
    <div className="search">
        <h1>Your Bestfriends - No Complaints No Demands!</h1>
        <p>Get all categories of books at nominal rates. Bookshelf is the number 1 book selling website and the most loved with its customers spread across the nation.</p>
        <div className="container">
            <div className="left">
                <div className="search-col-2">
                    <div className="box">
                        <div>
                            <img src={gold} alt="/" style={{marginRight:'1rem'}}/>
                        </div>
                        <div>
                            <h2>WORLD'S LEADING</h2>
                            <p>THE BEST BOOK SELLING WEBSITE</p>
                            <button style={{color:'black'}}>View Books</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="promo">
                    <h4 className="save">GET AN ADDITIONAL 15% OFF</h4>
                    <p className="times">12 HOURS LEFT!</p>
                    <p className="offers">VIEW ALL CURRENT OFFERS</p>
                </div>
                <form>
                    <div className="input-wrap">
                        <label>Categories</label>
                        <select name="search">
                            <option value="1">Fiction</option>
                            <option value="2">Mystery</option>
                            <option value="3">Children's Stories</option>
                            <option value="4">History</option>
                            <option value="5">Mythology</option>
                            <option value="6">Romance</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search;
