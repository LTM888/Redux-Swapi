import React  from 'react';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';


const CharacterList = props => {
  const fetchPhoto = e => {
    e.preventDefault();
    props.getPhoto();
  };

  return (
    <div>
    <h2> StarWar and Beyound</h2>
    {props.photoOfTheDay && (
      <div>
        <h4>{props.photoOfTheDay.title}</h4>
        <img src={props.photoOfTheDay.url} alt="NASA Photo of the day" />
        <p>{props.photoOfTheDay.explanation}</p>
      </div>
    )}
    {props.isLoading && (
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
    )}
    {props.error && <p className="error">{props.error}</p>}
    <Button color="info" onClick={fetchPhoto}>
      🛰 See today's photo 📸
    </Button>
  </div>
);
};
  



export default combineReducers({
  charsReducer
});
