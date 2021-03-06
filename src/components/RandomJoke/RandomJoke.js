import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { sendPunchline, sendSetup } from "../../store/joke/actions";
import { selectPunchline } from "../../store/joke/selectors";

export default function RandomJoke() {
  const initalState = { setup: "", punchline: "" };
  const [joke, setJoke] = useState(initalState);
  const dispatch = useDispatch();
  const punchline = useSelector(selectPunchline);

  console.log(punchline);

  useEffect(() => {
    async function getRandomJoke() {
      try {
        const response = await axios.get(
          `https://official-joke-api.appspot.com/jokes/programming/random`
        );
        setJoke(response.data[0]);
        dispatch(sendSetup(response.data[0].setup));
      } catch (error) {
        setJoke({
          setup: "Now that's not funny... We couldn't get the joke... ",
        });
      }
    }
    getRandomJoke();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(sendPunchline(joke.punchline));
    }, 4000);
    return () => clearTimeout(timer);
  }, [joke, punchline]);

  return !joke.setup ? (
    <div>Loading...</div>
  ) : (
    <div className="random-joke">
      <p>{joke.setup}</p>
      {!punchline ? <p>Wait for it...</p> : punchline}
    </div>
  );
}
