import React from "react";
import "./styles.css";
import Heart from "react-animated-heart";

export default function Counter(props) {
  //console.log(props);
  const { counter1, title, onDelete } = props;
  const [watchlist, setWatchlist] = React.useState(false);
  const handleIncrement = () => {
    setWatchlist(true);
  };

  const handleWatchlist = () => {
    setWatchlist(false);
  };
  const [isClick, setClick] = React.useState(false);
  return (
    <div className="counter">
      <span className="d">
        <div>Name:{counter1.title}</div>
        <div>Rating:{counter1.rating}</div>
        <div>Actors:{counter1.actor}</div>
      </span>
      <button
        className={watchlist ? "red" : "d"}
        onClick={() => handleIncrement()}
      >
        watchlist
      </button>
      <button onClick={() => handleWatchlist()}>deleteWatchlist</button>
      <button onClick={() => onDelete(title)}>delete</button>
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}
