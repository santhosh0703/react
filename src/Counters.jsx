import React from "react";
import "./styles.css";
import Counter from "./Counter";

export default function Counters(props) {
  const { onIncrement, watchlist, Counters1, onDelete } = props;

  return (
    <>
      {Counters1.map((counter) => (
        <Counter
          key={counter.title}
          title={counter.title}
          counter1={counter}
          onDelete={onDelete}
          watchlist={watchlist}
          onIncrement={onIncrement}
        />
      ))}
    </>
  );
}
