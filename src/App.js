import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Post  from "./Components/Post";
import Requests from "./Requests";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post title="NETFLIX ORIGINALS"
      fetchurl={Requests.originals}
      isLarge
      />
       <Post title="ACTION MOVIES"
      fetchurl={Requests.action}
      isLarge
      />
      <Post title="HORROR MOVIES"
      fetchurl={Requests.horror}
      isLarge
      />
      <Post title="COMEDY MOVIES"
      fetchurl={Requests.comedy}
      isLarge
      />
      <Post title="ROMANTIC MOVIES"
      fetchurl={Requests.romance}
      isLarge
      />
       <Post title="ANIMATED MOVIES"
      fetchurl={Requests.animation}
      isLarge
      />
      <Post title="FICTION MOVIES"
      fetchurl={Requests.science_fiction}
      isLarge
      />
    </div>
  );
};

export default App;
