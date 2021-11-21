var startButton = document.querySelector("#start"); 
var quiz = document.querySelector("#quiz"); 
var question = document.querySelector("#question"); 
var counter = document.querySelector("#counter");
var choice1 =document.querySelector("#1");
var choice2 =document.querySelector("#2");
var choice3 =document.querySelector("#3");
var choice4 =document.querySelector("#4");
var score = document.querySelector("#scorecontainer");
var questions = [
    {
    question:'What does HTML stand for?',
    choice1:'HyperText Markup Language',
    choice2:'Cascading Style Sheets',
    choice3:'Hypertext Transfer Protocol',
    choice4:'Home Tool Markup Language',
    correct:'1'
    },
    {
    question:'Which one is the unordered list tags?',
    choice1:'<ol></ol>',
    choice2:'<ul></ul>',
    choice3:'<html></html>',
    choice4:'<h1></h1>',
    correct:'2'
    },
    {
    question:'How do you add JavaScript To your html?',
    choice1:'<div></div>',
    choice2:'<body></body>',
    choice3:'<script></script>',
    choice4:'<header></header>',
    correct:'3'
    },
    {
    question:'What does CSS stand for?',
choice1:'HyperText Markup Language',
choice2:'Cooking Style Sheet',
choice3:'Cat Style Sheet',
choice4:'Cascading Style Sheet',
correct:'4'
    }
];

document.getElementById('start').addEventListener("click");