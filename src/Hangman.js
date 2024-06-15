import React, { useEffect, useState } from "react";
import Progress from "./Progress";

const Hangman = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Monkey",
    "Kangaroo",
    "Panda",
    "Zebra",
    "Hippo",
    "Rhino",
    "Bear",
    "Wolf",
    "Fox",
    "Deer",
    "Rabbit",
    "Camel",
    "Leopard",
    "Cheetah",
    "Dolphin",
    "Whale",
    "Shark",
    "Octopus",
    "Penguin",
    "Seal",
    "Eagle",
    "Owl",
    "Parrot",
    "Pigeon",
    "Crocodile",
    "Alligator",
    "Frog",
    "Turtle",
    "Snake",
    "Lizard",
    "Bat",
    "Gorilla",
    "Chimpanzee",
    "Squirrel",
    "Raccoon",
    "Beaver",
    "Hedgehog",
    "Antelope",
    "Buffalo",
    "Llama",
    "Moose",
    "Otter",
    "Porcupine",
    "Walrus",
  ];

  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Mango",
    "Peach",
    "Kiwi",
    "Cherry",
    "Blueberry",
    "Pear",
    "Plum",
    "Apricot",
    "Raspberry",
    "Blackberry",
    "Cantaloupe",
    "Honeydew",
    "Lemon",
    "Lime",
    "Coconut",
    "Fig",
    "Guava",
    "Papaya",
    "Lychee",
    "Starfruit",
    "Passion Fruit",
    "Dragon Fruit",
    "Jackfruit",
    "Persimmon",
    "Cranberry",
    "Gooseberry",
    "Tangerine",
    "Clementine",
    "Nectarine",
    "Quince",
    "Pomegranate",
    "Mulberry",
    "Currant",
    "Date",
    "Avocado",
    "Tomato",
    "Bell Pepper",
    "Raspberry",
    "Elderberry",
    "Soursop",
    "Durian",
    "Kumquat",
  ];

  const vegetables = [
    "Carrot",
    "Broccoli",
    "Spinach",
    "Potato",
    "Tomato",
    "Cucumber",
    "Lettuce",
    "Onion",
    "Pepper",
    "Celery",
    "Cabbage",
    "Pumpkin",
    "Eggplant",
    "Zucchini",
    "Radish",
    "Beet",
    "Asparagus",
    "Artichoke",
    "Cauliflower",
    "Brussels Sprouts",
    "Kale",
    "Sweet Potato",
    "Turnip",
    "Mushroom",
    "Squash",
    "Okra",
    "Garlic",
    "Fennel",
    "Peas",
    "Green Beans",
    "Corn",
    "Rhubarb",
    "Bok Choy",
    "Chard",
    "Collard Greens",
    "Watercress",
    "Jicama",
    "Yuca",
    "Yam",
    "Edamame",
    "Snow Peas",
    "Broccolini",
    "Bean Sprouts",
    "Endive",
    "Chili Pepper",
    "Scallion",
    "Leek",
  ];

  const [word, setWord] = useState("");
  const [category, setCategory] = useState("fruits");
  const [status, setStatus] = useState("");
  const [corrects, setCorrects] = useState([]);
  const [fails, setFails] = useState([]);

  const randomizeWord = () => {
    if (category === "animals") {
      setWord(
        animals[Math.floor(Math.random() * animals.length)].toUpperCase()
      );
    } else if (category === "vegetables") {
      setWord(
        vegetables[Math.floor(Math.random() * vegetables.length)].toUpperCase()
      );
    } else {
      setWord(fruits[Math.floor(Math.random() * fruits.length)].toUpperCase());
    }
  };

  const reset = () => {
    randomizeWord();
    setCorrects([]);
    setFails([]);
    setStatus('');
  };

  const onGuess = (letter) => {
    if (word.includes(letter)) {
      setCorrects([...corrects, letter]);
    } else {
      setFails([...fails, letter]);
    }
  };

  useEffect(reset, [category]);

  useEffect(() => {
    if (
      corrects.length &&
      word.split("").every((letter) => corrects.includes(letter))
    ) {
      setStatus("won");
    }
  }, [corrects]);

  useEffect(() => {
    if (fails.length === 10) {
      setStatus("lost");
    }
  }, [fails]);

  const maskWord = word
    .split("")
    .map((letter) => (corrects.includes(letter) ? letter : "_"))
    .join(" ");

  const buttonStyle = {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginRight: "10px",
    marginBottom: "10px",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
  };

  const buttonStyleCat = {
    ...buttonStyle,
    backgroundColor: "#007bff",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontSize: "18px",
      }}
    >
        <h1 style={{textAlign:"center", marginBottom: "20px"}}>HANGMAN</h1>
      <Progress fails={fails.length} />
      {status === "won" && (
        <div
          style={{ textAlign: "center", marginBottom: "20px", width: "100%" }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#28a745",
              maxWidth: "80%",
            }}
          >
            You Saved the Hangman 🎉
          </p>
        </div>
      )}
      {status === "lost" && (
        <div
          style={{ textAlign: "center", marginBottom: "20px", width: "100%" }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#dc3545",
              maxWidth: "80%",
            }}
          >
            Hangman is Dead 😞, the answer is <span style={{color: 'green', fontSize: "22px"}}>{word}</span>. Please
            restart the game.
          </p>
        </div>
      )}
      <p style={{ fontSize: "24px", marginBottom: "20px" }}>{maskWord}</p>
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <button
          style={
            category === "fruits"
              ? { ...buttonStyleCat, backgroundColor: "#28a745" }
              : buttonStyleCat
          }
          onClick={() => setCategory("fruits")}
        >
          Fruits
        </button>
        <button
          style={
            category === "vegetables"
              ? { ...buttonStyleCat, backgroundColor: "#28a745" }
              : buttonStyleCat
          }
          onClick={() => setCategory("vegetables")}
        >
          Vegetables
        </button>
        <button
          style={
            category === "animals"
              ? { ...buttonStyleCat, backgroundColor: "#28a745" }
              : buttonStyleCat
          }
          onClick={() => setCategory("animals")}
        >
          Animals
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {alphabet.map((letter, index) => (
          <button
            key={index}
            style={
              corrects.includes(letter) || fails.includes(letter)
                ? disabledButtonStyle
                : buttonStyle
            }
            onClick={() => onGuess(letter)}
            disabled={corrects.includes(letter) || fails.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <button
        style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Hangman;
