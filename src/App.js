import React from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";
import "./styles.css";

export default function App() {
  const [Counters1, setCounter] = React.useState([
    { title: "Master", rating: 8, actor: "vijay" },
    { title: "Iron Man", rating: 8.5, actor: "Robert John Downey Jr" },
    { title: "Tenet", rating: 8.5, actor: "John David Washington" },
    { title: "Artemis Fowl", rating: 9, actor: "Ferdia Shaw" }
  ]);

  const handleDelete = (title) => {
    const filteredCopy = Counters1.filter((el) => el.title !== title);
    setCounter(filteredCopy);
  };

  return (
    <>
      <Navbar />
      <Counters Counters1={Counters1} onDelete={handleDelete} />
    </>
  );
}
