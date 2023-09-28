/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["The dog", "My cat", "My grandma", "Her turtle", "My bird"];
  let action = ["ate", "peed on", "crushed", "tore up", "broke"];
  let what = [
    "my homework",
    "my keys",
    "my computer",
    "my headphones",
    "the car"
  ];
  let when = [
    "before our class",
    "last night",
    "this morning",
    "during my lunch",
    "while I was eating"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
