import "./styles.css";
import { useState } from "react";

//emoji dictionary
const foodEmojiDict = {
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧋": "Bubble Tea",
  "🧃": "Beverage Box",
  "🧉": "Mate"
};

let foodEmojiList = Object.keys(foodEmojiDict);
//adding basic html
//input meaning should shaw in div-->usestate
//show all emoji in ul from database
//on click on emoji show meaning
export default function App() {
  const [inputEmoji, setInputEmoji] = useState("😊");
  const [inputEmojiMeaning, setInputEmojiMeaning] = useState(
    "Please enter any food emoji"
  );

  function inputHandler(e) {
    let emoji = e.target.value;
    setInputEmoji(emoji);
    // console.log(inputEmoji);
    //console.log(foodEmojiList);

    if (emoji in foodEmojiDict) {
      // console.log(foodEmojiDict[emoji]);
      setInputEmojiMeaning(foodEmojiDict[emoji]);
    } else if (emoji === "") {
      let newEmojiMeaning = "Please enter any food emoji";
      setInputEmojiMeaning(newEmojiMeaning);
      setInputEmoji("😊");
    } else {
      let newEmojiMeaning = "This emoji is not available in our database";
      setInputEmojiMeaning(newEmojiMeaning);
    }
  }

  function clickHandler(emoji) {
    setInputEmojiMeaning(foodEmojiDict[emoji]);
    // console.log(foodEmojiDict[emoji]);
    setInputEmoji(emoji);
    console.log(inputEmojiMeaning);
    console.log(inputEmoji);
  }

  return (
    <div className="App">
      <h1>Food Emojipedia</h1>
      <input
        placeholder="Enter food emoji here"
        onChange={inputHandler}
      ></input>
      <h1>{inputEmoji}</h1>
      <h3>{inputEmojiMeaning}</h3>
      <h1>
        {foodEmojiList.map((emoji, index) => {
          return <span onClick={() => clickHandler(emoji)}>{emoji}</span>;
        })}
      </h1>
    </div>
  );
}
