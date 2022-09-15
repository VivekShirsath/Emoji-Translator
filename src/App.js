import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀":"grinning face",
  "😉":"winking face",
  "😏":"smirking face",
  "😐":"neutral face",
  "🤤":"drooling face",
  "🤔":"thinking face",
  "🙃":"Upside-down face",
  "🥰":"Smiling Face with Hearts",
  "😜":"Winking Face with Tongue",
  "😎":"Smiling Face with Sunglasses",
  "😯":"hushed Face",
  "🤐":"zipper-mouth face",
  "😴":"sleeping face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      if (meaning === undefined) {
        setMeaning = "We do not have this in our database";
      }
      setMeaning(meaning);
    } else if (userInput === "") {
      setMeaning("");
    } else {
      setMeaning("We do not have this in our database");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Select from the below emoji to get its meaning</h1>
      <input onChange={emojiInputHandler}></input>
      <h3>Emojis</h3>
      <h2> {meaning} </h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer",marginLeft: "1rem",padding:"1rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
