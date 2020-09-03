import React, { useEffect, useState } from "react";
import loading from "../images/loading.gif";
import loaded from "../images/loaded.gif";
import axios from "axios";

export default function RandomJoke() {
  const initalState = { setup: "", punchline: "" };
  const [joke, setJoke] = useState(initalState);
  const [punchline, setPunchline] = useState("");

  console.log(loaded);

  useEffect(() => {
    async function getRandomJoke() {
      try {
        const response = await axios.get(
          `https://official-joke-api.appspot.com/jokes/programming/random`
        );
        setJoke(response.data[0]);
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
      setPunchline(joke.punchline);
    }, 4000);
    return () => clearTimeout(timer);
  }, [joke]);

  return !joke.setup ? (
    <div>Loading...</div>
  ) : (
    <div>
      <p>{joke.setup}</p>
      {!punchline ? <p>Wait for it...</p> : punchline}
      <img src={punchline ? loaded : loading}></img>
    </div>
  );
}
