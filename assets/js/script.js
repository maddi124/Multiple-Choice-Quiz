var startButton = document.getElementById('start'); 
var quiz = document.getElementById('quiz'); 
var question = document.getElementById('question'); 
var counter = document.getElementById('counter');
var choice1 =document.getElementById('1');
var choice2 =document.getElementById('#2');
var choice3 =document.getElementById('3');
var choice4 =document.getElementById('4');
var score = document.getElementById("#scorecontainer");

var questionschoice = [
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

function startquiz(){

}


document.getElementById('start').addEventListener("click",startquiz);