/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let Imprimir = "";
  Imprimir += who[Math.floor(Math.random() * 4)];
  Imprimir += " " + action[Math.floor(Math.random() * 4)];
  Imprimir += " " + what[Math.floor(Math.random() * 3)];
  Imprimir += " " + when[Math.floor(Math.random() * 5)];
  [Math.floor(Math.random() * 4)];
  document.querySelector("#excuse").innerHTML = Imprimir;
  console.log("Hello Rigo from the console!");
};
