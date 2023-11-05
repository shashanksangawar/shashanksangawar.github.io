<<<<<<< HEAD
// toggle menu navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuicon.onclick = () =>
{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 





// scroll Sections
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll = () =>
{   
    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 100;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height)
        {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
            
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY>100)

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
=======
// import { help, command_execution } from "./command";
const outputElement = document.getElementById('output-container');
const inputElement = document.getElementById('input');
const inputContainer = document.getElementById('input-container');
const terminal = document.getElementsByClassName('terminal-container');

setTimeout(function(){
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main').style.display = 'block';
},3200);

// Terminal Logic
inputElement.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        // When enter key is pressed from the terminal
        const inputText = inputElement.value;
        const newLine = document.createElement('div');
        newLine.innerHTML = `<div id="prompt"><span class="name">shashank</span><span class="separator">@</span><span class="code">code</span> <span class="route">~</span>$   ${inputText}</div> `;
        outputElement.appendChild(newLine);

        const userCommand = inputText.toLowerCase();
        const ScreenOutput = command_execution(userCommand);
        if (ScreenOutput==='')
        {
            outputElement.innerHTML += `Unknown Command ${userCommand} please check commands using <span class="command-help">"help"</span>`;
        }
        else if (ScreenOutput==='clear')
        {
            outputElement.innerHTML = ""
        }
        else
        {
            outputElement.innerHTML += ScreenOutput.join('');
            
        }
        setTimeout(function(){ 
            inputElement.style.display = 'inline';
            inputElement.focus();
        },3000);
        inputElement.value = "";
        inputElement.focus();
        // Scroll to Bottom
        window.scrollTo(0,document.body.scrollHeight);
    }
});






const help = [
    '<br><br>',
    '<div class="help">',
    '<p><b class="command-help">about</b>          A short intro about who I am and what I do.</p>',
    '<p><b class="command-help">projects</b>       List of Coding Projects.</p>',
    '<p><b class="command-help">socials</b>        Social Media Handles.</p>',
    '<p><b class="command-help">secret</b>         A Secret surprise for you!!!</p>',
    '<p><b class="command-help">contact</b>        Reach me out.</p>',
    '<p><b class="command-help">info</b>           A brief intro about who I am and what I do.</p>',
    '<p><b class="command-help">hire</b>           Hire Me as a Free-Lancer.</p>',
    '<p><b class="command-help">clear</b>          Clears the terminal.</p>',
    '</div>',
    '<br><br>'
]


const about = [
    '<br><br>',

    '<div class="about">',
    '<img src="images/batman-logo-png-2032.svg" alt="" width="200">',
    '<div class="about-text">',
    "Heya Folk, it's a pleasure having you here!!! <br>",
    "<p> First of all myself Shashank Sangawar.<br> I'm a System Designer and FullStack Web Developer. ",
    "However I've an experience of past 1 year in handling servers, developing machine learning models, ",
    "creating finance-based applications, managing security and many more.<br>",
    "I work as a Freelancer so if you are interested in creating a new web server you can hire me using <span class='command-help'>'hire'</span> command.</p>",
    '</div>',
    '</div>',
    '<br><br>'
]

const projects = [
    '<br><br>',
    '<div class="projects">',
    "Still creating... most projects are offline, on GitHub, or confidential.",
    '</div>',
    '<br><br>'
]

const socials = [
    '<br><br>',
    '<div class="socials">',
    "<h3> Oops didn't get an alias use one of these after entering <span class='command-help'>'socials'</span> command. </h3>",
    '<p><b class="command-help">[--g]</b>         Redirect to my Github account.</i></p>',
    '<p><b class="command-help">[--l]</b>         Redirect to my LinkedIn account.</p>',
    '<p><b class="command-help">[--y]</b>         Redirect to my Youtube account.</p>',
    "<h3> Example : socials --g </h3>",
    '</div>',
    '<br><br>'
] 

const contact = [
    '<br><br>',
    '<div class="contact">',
    "<h3> Oops didn't get an alias use one of these after entering <span class='command-help'>'contact'</span> command. </h3>",
    '<p><b class="command-help">[--w]</b>         Redirect to my Whatsapp account.</p>',
    '<p><b class="command-help">[--t]</b>       Redirect to my Telegram account.</p>',
    "<h3> Example : contact --w </h3>",
    '</div>',
    '<br><br>'
]

const info = [
    '<br><br>',
    '<div class="info">',
    '<img src="images/hello.svg" alt="hello" width="200"></img>',
    '<div class="info-text">',
    "<p> <i>moshi moshi</i>. I like to spend more time into gym and give my best. I hope I can better introduce myself in person and about professional work you can see using <span class='command-help'>'about'</span> command.  ok that's enough you are stalking me man..... 👀</p>",
    '</div>',
    '</div>',
    '<br><br>'
]

function command_execution(command)
{
    switch(command)
    {
        case 'help':
            return help;
        case 'about':
            return about;
        case 'projects':
            return projects;
        case 'socials':
            return socials;
        case 'socials --g':
            window.open('https://github.com/shashanksangawar');
            return "redirected";
        case 'socials --l':
            window.open('https://in.linkedin.com/in/shashank-sangawar-25a50423b');
            return "redirected";
        case 'socials --youtube':
            return "<p> I apologise but the account is yet to be created.</p>";
        case 'secret':
            window.open('https://youtu.be/dQw4w9WgXcQ?si=JBW-qYFqWzO1EmbK');
            return "redirected";
        case 'contact':
            return contact;
        case 'contact --w':
            window.open('https://wa.me/9137760772');
            return "redirected";
        case 'contact --t':
            window.open('https://t.me/shashanksangawar');
            return "redirected";
        case 'info':
            return info;
        case 'clear':
            return 'clear';
        case 'hire':
            window.open("https://mail.google.com/mail/u/0/?fs=1&to=shashanksangawar.bit@gmail.com&tf=cm ");
            return "redirected";
        default:
            return ""
    }
>>>>>>> c918269 (Second Commit)
}