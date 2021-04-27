const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [ //100
    {
        question: 'What does html mean?',
        choice1: 'hyperlink and marker lamp',                                 //1
        choice2: 'Hypertext Markup Language',
        choice3: 'i dunno',
        choice4: 'something used for coding',
        answer: 2,
    },
    {
        question:
            "what is the css meaning",
        choice1: " Cascading Style Sheets",
        choice2: "Cascade Style Sheets",                                            //2
        choice3: "i dunno",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "what is the biggest header tag?",
        choice1: "<h6>",
        choice2: "<h10>",                                           //3
        choice3: "<h1>",
        choice4: "<hs>",
        answer: 3,
    },
    {
        question: "What is the basic code called",
        choice1: "Boilerplate code",
        choice2: "turtle shell code",                                           //4
        choice3: "turn-up code",
        choice4: "doesn't have a name",
        answer: 1,
    },
    {
        question: 'what is the meaning of js?',
        choice1: 'java cup',
        choice2: 'Javascript',
        choice3: 'java source',                                           //5
        choice4: 'java sell',
        answer: 2,
    },
    {
        question: 'What is the way to start a html file?',
        choice1: '<!DOCTYPE tml>',
        choice2: 'Html',                                           //6
        choice3: '?Doctype',
        choice4: "!DOCTYPE HTML",
        answer: 1,
    },
    {
        question: 'what is the way to change text-color?',
        choice1: 'text-color: blue;',
        choice2: 'text color; green:',                                           //7
        choice3: 'color: black;',
        choice4: "text-black: true;",
        answer: 1,
    },
    {
        question: 'what is the way  for creating a html file?',
        choice1: 'name file',
        choice2: 'name file.vscode',
        choice3: "doesn't matter",
        choice4: 'name file.html',                                           //8
        answer: 4,
    },
    {
        question: 'what is the tag name called?',
        choice1: 'attribute',
        choice2: 'id',
        choice3: "element",                                           //9
        choice4: 'TAG',
        answer: 3,
    },
    {
        question: 'Do all html tags have end tags?',
        choice1: 'yes',
        choice2: 'none have end tags',                                           //10
        choice3: "all important ones",
        choice4: 'no',
        answer: 4,
    },
  
    {
        question: 'how to create a hyperlink?',
        choice1: '<anchor h="">',
        choice2: 'redirect-to="": TRUE;',                                           //11
        choice3: '<a href=""',
        choice4: 'buton: hyperlink',
        answer: 3,
    },
  
    {
        question: 'what is a way to include inner js in a html file?',                                           //12
        choice1: '<js>',
        choice2: '<javascript>',
        choice3: "<javasource>",
        choice4: '<script>',
        answer: 4,
    },
    {
        question: 'can you create variable tags?',
        choice1: 'yes',
        choice2: 'no',                                           //13
        choice3: "some work",
        choice4: 'there a chance',
        answer: 1,
    },
    {
        question: 'what is a website used for mini-images?',
        choice1: 'mini-logos.com',
        choice2: 'font-awesome',
        choice3: "w3schools",                                           //14
        choice4: 'totaly-not-a-virus.this_is_a_virus',
        answer: 2,
    },
    {
        question: 'how to make a window tab refresh using javascript?',
        choice1: 'window.refresh()',
        choice2: 'window.reload()',                                           //15
        choice3: "location.refresh()",
        choice4: 'location.reload()',
        answer: 4,
    },
    {
        question: 'how do you start a paragraph?',
        choice1: '<h1:p;TRUE>content</h1>',                                           //16
        choice2: '<p>content</p>',
        choice3: "<p h1:sizesamll:true;><content></p h1:sizesamll:true;>",
        choice4: 'location.reload()',
        answer: 2,
    },
    {
        question: 'what do you put inside a anchor tag for a dead link?',
        choice1: '/',
        choice2: 'Deadlink',                                           //17
        choice3: "#",
        choice4: 'location(.redirect not working)',
        answer: 2,
    },
    {
        question: 'what is the divider tag?',
        choice1: '<divider></divider>',
        choice2: '<div>',
        choice3: "<div></div>",                                           //18
        choice4: 'divider: true else false',
        answer: 3,
    },
    {
        question: 'what is the javascript outer linking format?',
        choice1: '<script></script>',
        choice2: '<script scr="example.js"></script>',                                           //19
        choice3: "<Style>",
        choice4: '<editor><editor>',
        answer: 2,
    },
    {
        question: 'what is the css outer linking format?',
        choice1: '<RAINBOW scr="example.css">',                                           //20
        choice2: 'css:true: {color:green} default ',
        choice3: "<div>use css:true:default</div>",
        choice4: '<link rel="stylesheet href="example.css',
        answer: 4,
    },
    {
        question: 'what is the tag necessary for a proper starting html tag',
        choice1: '<html></html>',
        choice2: '<!DOCTYPE html></html>',                                           //21
        choice3: "<?html content ?>",
        choice4: 'html:true: {button:false} default',
        answer: 2,
    },
    {
        question: 'what must an ending tag include?',
        choice1: '#',
        choice2: '/',                                           //22
        choice3: "!",
        choice4: '?',
        answer: 2,
    },
    {
    question: 'How to start using CSS elements in an HTML File?',
choice1: 'style',
choice2: '<style',
choice3: '<!style>',                                           //23
choice4: '<style>',
answer: 4,
    },
    {
        question: 'How in HTML to write the body of a Paragraph',
    choice1: 'I do not know!',
    choice2: '<body>',                                           //24
    choice3: 'body',
    choice4: 'I drew it!',
    answer: 2,
        },
        {
            question: 'How to write function "name"(){} in Javascript',
        choice1: '()',
        choice2: 'Its right there!',                                           //25
        choice3: 'function start{}',
        choice4: '<function()>',
        answer: 2
            },
            {
                question: 'How do you write a variable in Javascript',
                choice1: 'var "name"="stuff"',
                choice2: 'variable',                                           //26
                choice3: 'i dunno',
                choice4: '"name"="stuff"',
                answer: 1,
            },
            {
                question:
                    "How to print (kind of) something in JavaScript?",
                choice1: "print()",
                choice2: "console.log()",                                           //27
                choice3: "System.out.Println",
                choice4: "None of the above",
                answer: 2,
            },
            {
                question: "what is the smallest header tag?",
                choice1: "<h6>",
                choice2: "<h10>",
                choice3: "<h1>",                                           //28
                choice4: "<hs>",
                answer: 1,
            },
            {
                question: "How to create a seperate line without using <div>?",
                choice1: "<sep>",
                choice2: "<break>",
                choice3: "<br>",                                           //29
                choice4: "<seperate>",
                answer: 3,
            },
            {
                question: 'How to paint something using HTML without using CSS?',
                choice1: 'I do not know',
                choice2: 'You cannot',
                choice3: '<paint>',                                           //30
                choice4: '<color red>',
                answer: 2,
            },
            {
                question: 'How to change the background color?',
                choice1: 'background-color:"color"',                                           //31
                choice2: 'background-color="color"',
                choice3: 'background color:"color"',
                choice4: "background:'color'",
                answer: 3,
            },   
            {
                question: 'How to upload a background image?',
                choice1: 'background-image= url("stuff")',
                choice2: 'background-color="stuff"',
                choice3: 'background-image: url("stuff")',                                           //32
                choice4: "'background-color:'stuff'",
                answer: 3,
            },
            {
                question: 'How to expand your background of your element (not whole site)?',
                choice1: 'padding: px or %',
                choice2: 'padding= px or %',                                           //33
                choice3: "Not even a thing",
                choice4: '<background expand>',
                answer: 1,
            },
            {
                question: 'How to call an element into a css file from html in the following options?',
                choice1: 'Tag',
                choice2: 'ID',                                           //34
                choice3: "#",
                choice4: 'LOL you cannot',
                answer: 3,
            },
            {
                question: 'How to call an element into a css file in the following options?',
                choice1: '.',                                           //35
                choice2: 'Class',
                choice3: "Of course you cannot",
                choice4: '<css link>',
                answer: 1,
            },
          
            {
                question: 'How to declare an element in HTML that can be used in CSS in the following options?',
                choice1: 'class:"name"',
                choice2: 'class="name"',
                choice3: '.',
                choice4: 'Class="name"',
                answer: 2,                                           //36
            },
          
            {
                question: 'How to declare an element in HTML that can be used in CSS in the following options?',
                choice1: 'id="name"',
                choice2: 'iD:"name"',
                choice3: "id:'name'",
                choice4: 'None of the Above',
                answer: 1,                                           //37
            },
            {
                question: 'How can you create variables in CSS?',
                choice1: 'I do not know',
                choice2: 'No you cannot',                                           //38
                choice3: "hold:'stuff'",
                choice4: ';stuff;',
                answer: 2,
            },
            {
                question: 'How do you curve the background of something in CSS?',
                choice1: 'curve="stuff"',
                choice2: 'curve:"stuff"',                                           //39
                choice3: "border-radius:'stuff'",
                choice4: 'border-radius="stuff"',
                answer: 2,
            },
            {
                question: 'What is the proper format for the beginning of a tag?',
                choice1: '<"stuff">',
                choice2: 'var "name"= "stuff"',
                choice3: "tag<tag 'stuff' tag>",                                           //40
                choice4: ';"stuff;"',
                answer: 1,
            },
            {
                question: 'How do you change the title of your website?',
                choice1: '<name>',
                choice2: '<website>',                                           //41
                choice3: "<h1>",
                choice4: '<title>',
                answer: 4,
            },
            {
                question: 'What command do you have to do (just the name not the whole thing) to make a random decimal?',
                choice1: 'Math.floor',
                choice2: 'Math.random',                              //42
                choice3: "<random>",
                choice4: 'math-random:',
                answer: 2,
            },
            {
                question: 'How to write the ending part of a tag?',
                choice1: '</"stuff">',
                choice2: '<"stuff">',                              //43
                choice3: "tag;</tag /'stuff'>tag;",
                choice4: '<br>',
                answer: 1,
            },
            {
                question: 'How to change the Math.random to a round into a integer instead?',
                choice1: 'Math.floor',
                choice2: 'Math.round',
                choice3: "It is right there!",                              //44
                choice4: '<round>',
                answer: 1,
            },
            {
                question: 'How to change where the text is placed?',
                choice1: 'text-alignment:"stuff";',
                choice2: 'change-align="stuff";',                              //45
                choice3: "text-place:'stuff';",
                choice4: 'text-align:"stuff";',
                answer: 4,
            },
            {
                question: 'How do you change the font-size of an element?',
                choice1: 'It is right up there',
                choice2: 'font-change:"stuff"',
                choice3: "font-sizing:'stuff'",
                choice4: 'font-rectifying:"stuff"',                              //46
                answer: 1,
            },
            {
                question: 'How do you link an image to a website in HTML?',
                choice1: '<img source="link">',
                choice2: '<source="link">',
                choice3: "<img source:'link';>",
                choice4: '<source:"link";>',                              //47
                answer: 2,
            },
            {
            question: 'How do you make a button?',                              //48
        choice1: '<button-click>',
        choice2: '<click type="button">',
        choice3: '<button>',
        choice4: '<click-button>',
        answer: 3,
            },
            {
                question: 'How do you get a radio button (not any other parts like name)?',                              //49
            choice1: '<input type="radio">',
            choice2: '<label type="radio">',
            choice3: '<radio>',
            choice4: '<select type="radio">',
            answer:1,
              },
                {
                    question: 'How do you create a navigation bar?',
                choice1: 'It is right there!',
                choice2: '<nav>',
                choice3: '<navigation>',                              //50
                choice4: '<select type="navigation">',
                answer: 2
                    },
                    {
                        question: 'How do you create a big text box?',                              //51
                        choice1: '<text-area row>',
                        choice2: '<text-box>',
                        choice3: 'It is right there!',
                        choice4: '<area-text>',
                        answer: 1,
                    },
                    {
                        question:
                            "How do you make a small text box",
                        choice1: "<input text>",                              //52
                        choice2: "<text-box>",
                        choice3: '<input type="text-box">',
                        choice4: '<input type="text">',
                        answer: 1,
                    },
                    {
                        question: "What is the largest amount of characters you can print for a heading?",
                        choice1: "100",
                        choice2: "Infinite",                              //53
                        choice3: "1000",
                        choice4: "Depends on the website",
                        answer: 4,
                    },
                    {
                        question: "How do you create a checkbox without any other elements like class?",                              //54
                        choice1: '<input type="checkbox">',
                        choice2: 'input type="checkbox"',
                        choice3: '<checkbox>',
                        choice4: 'It is right up there!',
                        answer: 1,
                    },
                    {
                        question: 'What does <lava> do?',
                        choice1: 'Nothing',
                        choice2: 'Prints <lava>',
                        choice3: 'Makes a word in the mixing colors of lava',
                        choice4: 'I do not know!',                              //55
                        answer: 2,
                    },
                    {
                        question: 'What does <create> do?',
                        choice1: 'I do not know!',
                        choice2: 'Nothing',
                        choice3: 'Prints <create>',                              //56
                        choice4: "Creates anything you want",
                        answer: 3,
                    },
                    {
                        question: 'If you write something in a middle of an HTML document what does it do?',
                        choice1: 'It just prints that out',
                        choice2: 'It does nothing',
                        choice3: 'Makes everything fail',
                        choice4: "Crashes your computer",                              //57
                        answer: 1,
                    },
                    {
                        question: 'How do you create a file in JavaScript?',
                        choice1: '"name".JavaScript',
                        choice2: '"name".JS',
                        choice3: "'name'.javascript",
                        choice4: '"name".js',                              //58
                        answer: 4,
                    },
                    {
                        question: 'How do you create a css file?',
                        choice1: 'It is right up there!',
                        choice2: 'file."name".css',
                        choice3: "'name'.css",
                        choice4: '"name".CSS',                              //59
                        answer: 3,
                    },
                    {
                        question: 'Can you do <math>7 + 8</math>?',
                        choice1: 'Maybe',
                        choice2: 'Yes',
                        choice3: "No",
                        choice4: 'Sometimes',                              //60
                        answer: 3,
                    },
                    {
                        question: 'Can you do <name>?',
                        choice1: 'No',
                        choice2: 'Yes',
                        choice3: "Maybe",
                        choice4: 'Sometimes',                              //61
                        answer: 1,
                    },
                    {
                        question: 'Can you do <form>?',
                        choice1: 'No',
                        choice2: 'Yes',
                        choice3: "Sometimes",
                        choice4: 'Maybe',                              //62
                        answer: 2,
                    },
                    {
                        question: 'Which tag allows you to connect words with another tag (usually input)?',
                        choice1: '<input>',
                        choice2: '<label>',
                        choice3: "<for>",
                        choice4: '<name>',                              //63
                        answer: 2,
                    },
                    {
                        question: 'What is this <"name">?',
                        choice1: 'A Attribute',
                        choice2: 'A Id',
                        choice3: "A Element",
                        choice4: 'A Tag',                              //64
                        answer: 4,
                    },
                    {
                        question: 'Does <tag> work?',
                        choice1: 'Yes',
                        choice2: 'Sometimes',                              //65
                        choice3: "Maybe",
                        choice4: 'no',
                        answer: 4,
                    },
                  
                    {
                        question: 'Which language uses this "<>" to do things?',
                        choice1: 'JavaScript',
                        choice2: 'CSS',
                        choice3: 'HTML',                              //66
                        choice4: 'Not one I have learned yet',
                        answer: 3,
                    },
                  
                    {
                        question: 'Which language uses "." to do things?',
                        choice1: 'Not one I have learned yet',
                        choice2: 'JavaScript',
                        choice3: "HTML",                              //67
                        choice4: 'CSS',
                        answer: 4,
                    },
                    {
                        question: 'Which language uses "#" to do things?',
                        choice1: 'CSS',
                        choice2: 'JavaScript',                        //68
                        choice3: "HTML",
                        choice4: 'Not one I have learned yet',
                        answer: 1,
                    },
                    { 
                        question: 'Which language uses System.out.println()?',
                        choice1: 'HTML',                              //69
                        choice2: 'CSS',
                        choice3: "JS",
                        choice4: 'None of the above',
                        answer: 4,
                    },
                    {
                        question: 'Which language uses ";"?',
                        choice1: 'A lot of them',                              //70
                        choice2: 'HTMl',
                        choice3: "None",
                        choice4: 'CSS',
                        answer: 1,
                    },
                    {
                        question: 'What does System.out.println() do?',
                        choice1: 'I do not know',
                        choice2: 'It prints anything you put in the brackets',
                        choice3: "It is out of the system",                              //71
                        choice4: 'It does not do anything',
                        answer: 2,
                    },
                    {
                        question: 'Which of these is not a tag in HTML?',
                        choice1: '<input>',
                        choice2: '<div>',
                        choice3: "<style>",                              //72
                        choice4: '<solect>',
                        answer: 4,
                    },
                    {
                        question: 'Which of these is not a tag in HTML?',
                        choice1: '<,div,>',
                        choice2: '<select>',                              //73
                        choice3: "<label>",
                        choice4: '<p>',
                        answer: 1,
                    },
                    {
                        question: 'Which of these is not used in CSS?',
                        choice1: 'background-color:;',
                        choice2: 'background-line:;',
                        choice3: "font-color:;",                              //74
                        choice4: 'font-size:;',
                        answer: 2,
                    },
                    {
                        question: 'Which of these is not used in CSS?',                              //75
                        choice1: 'background-color:;',
                        choice2: 'font-family:;',
                        choice3: "background:;",
                        choice4: 'vont-color:;',
                        answer: 4,
                    },
                    {
                        question: 'Which of these is not a tag in HTML?',
                        choice1: '<moin>',
                        choice2: '<form>',                              //76
                        choice3: "<list>",
                        choice4: '<ordered>',
                        answer: 2,
                    },
                    {
                        question: 'Which of these is used in css?',
                        choice1: '@keyframes',                              //77
                        choice2: 'background-font',
                        choice3: "help-back",
                        choice4: 'text-size',
                        answer: 1,
                    },
                    {
                    question: 'Is "int" a thing in JS?',
                choice1: 'YES ',
                choice2: 'NO',                              //78
                choice3: 'Maybe',
                choice4: 'Sometimes',
                answer: 2,
                    },
                    {
                        question: 'Is "str" a thing in JS?',
                    choice1: 'Sometimes',
                    choice2: 'YES',
                    choice3: 'NO',                              //79
                    choice4: 'Maybe',
                    answer: 3,
                        },
                        {
                            question: 'Is "float" a thing in JS?',                              
                            choice1: 'Sometimes',
                            choice2: 'YES',                                                         //80
                            choice3: 'NO',                             
                            choice4: 'Maybe',
                            answer: 3,
                            },
                            {
                                question: 'What does background-color do?',
                                choice1: 'This is a CSS element',
                                choice2: 'Does nothing',
                                choice3: 'Changes the size of the background',
                                choice4: 'Changes the color of the background',                              //81
                                answer: 4,
                            },
                            {
                                question:
                                    "What does font-size do?",
                                choice1: "Changes the font size",                              //82
                                choice2: "Makes the font constantly go between big and small",
                                choice3: "Does nothing",
                                choice4: "Sizes the font",
                                answer: 1,
                            },
                            {
                                question: "What do @keyframes do?",
                                choice1: "Allow and animation(like gif)",
                                choice2: "It moves the key to frames",
                                choice3: "It frames the key",                              //83
                                choice4: "Nothing, not even a thing",
                                answer: 1,
                            },
                            {
                                question: "What do @framekeys do?",
                                choice1: "Allow and animation(like gif)",
                                choice2: "It moves the key to frames",
                                choice3: "It frames the key",                              //84
                                choice4: "Nothing, not even a thing",
                                answer: 4,
                            },
                            {
                                question: 'What is the parameters in this "function functionName(John, Jim, Joe)"?',
                                choice1: 'functionName',
                                choice2: 'function',                              //85
                                choice3: 'John, Jim, Joe',
                                choice4: 'There are no parameters in this question',
                                answer: 3,
                            },
                            {
                                question: 'What is a tag that is used in HTML?',
                                choice1: '<mask>',
                                choice2: '<a>',                              //86
                                choice3: 'There is no tag in HTML',
                                choice4: "<crate>",
                                answer: 2,
                            },
                            {
                                question: 'What does "href=" do?',
                                choice1: 'Allows you to give a link',                              //87
                                choice2: 'Does nothing',
                                choice3: 'Hello rely embasy ferry',
                                choice4: "Allows to change the color without doing CSS",
                                answer: 1,
                            },
                            {
                                question: 'Which one is a tag in CSS?',
                                choice1: '.background-img:;',
                                choice2: '<select>',                              //88
                                choice3: "background-color:;",
                                choice4: 'CSS does not have a tag',
                                answer: 4,
                            },
                            {
                                question: 'Which one is a tag in JS?',
                                choice1: '<input>',
                                choice2: 'id',
                                choice3: "There is none",                              //89
                                choice4: 'var "tag-name";',
                                answer: 3,
                            },
                            {
                                question: 'Does CSS use ":"?',
                                choice1: 'yes',
                                choice2: 'none have end tags',                              //90
                                choice3: "all important ones",
                                choice4: 'no',
                                answer: 1,
                            },
                          
                            {
                                question: 'Does HTML use ":"?',
                                choice1: 'yes',
                                choice2: 'none have end tags',                              //91
                                choice3: "all important ones",
                                choice4: 'no',
                                answer: 4,
                            },
                            {
                                question: 'Does JS use ":"??',
                                choice1: 'yes',
                                choice2: 'none have end tags',                              //92
                                choice3: "all important ones",
                                choice4: 'no',
                                answer: 1,
                            },
                            {
                                question: 'Which of these is a incorrect html tag?',
                                choice1: '<footer>',
                                choice2: '<html>',
                                choice3: "<h>",
                                choice4: '<title>',                              //93
                                answer: 3,
                            },
                            {
                                question: 'Which is a proper variable in JS?',                              //94
                                choice1: 'variable thing;',
                                choice2: 'thing;',
                                choice3: "var thing;",
                                choice4: 'var:;',
                                answer: 3,
                            },
                            {
                                question: 'Which variable is written correctly in CSS?',
                                choice1: 'background-image:;',
                                choice2: 'There are no variables',
                                choice3: "var thing;",                              //95
                                choice4: '.thing{}',
                                answer: 2,
                            },
                            {
                                question: 'What are the parameters in this "<p>Hello there</p>"?',
                                choice1: '<p>',
                                choice2: '<p>content</p>',
                                choice3: "Hello there",                              //96
                                choice4: '</p>',
                                answer: 3,
                            },
                            {
                                question: 'What are the parameters in this "background-image:;"?',
                                choice1: 'background',
                                choice2: 'image',
                                choice3: "There are none",                              //97
                                choice4: ':;',
                                answer: 3,
                            },
                            {
                                question: 'What does the input tag do?',
                                choice1: 'It tries to get the input from you',                              //98
                                choice2: 'It is right there!',
                                choice3: "It tries to output you the input",
                                choice4: 'It tries to give you the output',
                                answer: 1,
                            },
                            {
                                question: 'Which of these is not used in HTML?',
                                choice1: 'rel=""',
                                choice2: 'link=""',                              //99
                                choice3: 'class=""',
                                choice4: 'id=""',
                                answer: 2,
                            },
                            {
                                question: 'Which of these is not used in JS?',
                                choice1: 'var',                              //100
                                choice2: 'function',
                                choice3: "console.log",
                                choice4: 'print.log',
                                answer: 4,
                            },
 ]
  
 



const SCORE_POINTS = 10
const MAX_QUESTIONS = 100

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('index.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()