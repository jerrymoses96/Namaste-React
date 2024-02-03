import { useState } from "react";

const User = ({ name, place }) => {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1);
  };
  return (
    <div className="user-list">
      <h1>Name : {name}</h1>
      <h2>Place : {place}</h2>
      <h3> count : {count}</h3>
      <h3>Job : Software Developer</h3>
      <button onClick={handleClick}>click here</button>
    </div>
  );
};

export default User;
