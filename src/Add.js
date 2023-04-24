import React from 'react';
import { useState } from 'react';
import Popup from './popup.js';
import './popupstyle.css'

const Add = (movies,setMovies) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [Title, setNtitle] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDesc] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    setMovies(movies => [...movies,{Title,posterUrl,rate,description}]);
    setNtitle('');
    setPosterUrl('');
    setRate('');
    setDesc('');
    event.target.reset();
  };
 
  return <div>
    <input className='main_addbtn'
      type="button"
      value="add a movie"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
      <form onSubmit={handleSubmit}>>
      <label>
    Movie Name:
    <input
        type="text"
        id="addtitle"
        name="addtitle"
        value={Title}
        placeholder="Title"
        onChange={(event) =>
          setNtitle(event.target.value)
        }
      /></label>
  <label>
    Poster URL:
    <input
        type="text"
        id="PosterUrl"
        name="PosterUrl"
        value={posterUrl}
        placeholder="PosterUrl"
        onChange={(event) =>
          setPosterUrl(event.target.value)
        }
      /></label>
  <label>
    Rate:
    <input
        type="text"
        id="Rate"
        name="Rate"
        value={rate}
        placeholder="Rate"
        onChange={(event) =>
          setRate(event.target.value)
        }
      /></label>
  <label>
    Description:
    <input
        type="text"
        id="Description"
        name="Description"
        value={description}
        placeholder="Description"
        onChange={(event) =>
          setDesc(event.target.value)
        }
      /></label>
  <input type="submit" value="Submit" />
      </form>
      
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Add
