var startbutton =document.querySelector('#start'); 
var quiz = document.querySelector('#quiz'); 
var question = document.querySelector('#question'); 
var counter = document.querySelector('#count');
var h1El = document.createElement("h1");
//var score = document.getElementById("#scorecontainer");

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
  var second= 72;

    var timeInterval = setInterval(function(){
        if (second > 1) {
            counter.textContent = second;
            second--;
        }
        else if (second === 1){
            counter.textContent ='Done';
            second--;
        }
        else {
            counter.textContent = '';
            clearInterval(timeInterval);
        }
    },1000);

}
startbutton.addEventListener("click",startquiz);