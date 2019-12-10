//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [quarter, setQuarter] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">CT</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">T</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHome(home + 1)} className="homeButtons__touchdown">CT Round Win</button>
          {/* <button onClick={() => setHome(home + 3)} className="homeButtons__fieldGoal">Home Field Goal</button> */}
        </div>
        <div className="awayButtons">
          <button onClick={() => setAway(away + 1)} className="awayButtons__touchdown">T Round Win</button>
          {/*<button onClick={() => setAway(away + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>*/}
        </div>
        <div className="quarterButtons">
          <button onClick={() => setQuarter(quarter + 1)} className="quarterButtons">Round</button>
        </div>
      </section>
    </div>
  );
}

export default App;
