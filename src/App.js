import { useEffect, useState } from "react";
import UserCart from "./UserCart";
import "./App.css";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  console.log(users);
  return (
    <div className="App">
      <UserCart users={users}></UserCart>
    </div>
  );
}

export default App;
