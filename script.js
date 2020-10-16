const navigation = document.getElementById('navigation');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', event =>{
    navigation.classList.toggle('open');
    event.stopPropagation();
});

document.addEventListener('click', ()=>{
    navigation.classList.remove('open');
});

var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector("#wrapper");
 
var activeLink = 0;
 
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);
 
    link.itemID = i;
}
 
links[activeLink].classList.add("active");
 
function setClickedItem(e) {
    removeActiveLinks();
 
    var clickedLink = e.target;
    activeLink = clickedLink.itemID;
 
    changePosition(clickedLink);
}
 
function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}
 

function changePosition(link) {
    var position = link.getAttribute("data-pos");
 
    var translateValue = "translate3d(" + position + ", 0px, 0)";
    wrapper.style.transform = translateValue;
 
    link.classList.add("active");
}

var timeoutID;
 
function startTimer() {
    timeoutID = window.setInterval(goToNextItem, 5000);
}
startTimer();
 
function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}
function setClickedItem(e) {
    removeActiveLinks();
    resetTimer();
 
    var clickedLink = e.target;
    activeLink = clickedLink.itemID;
 
    changePosition(clickedLink);
}

function goToNextItem() {
    removeActiveLinks();
 
    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }
 
    var newLink = links[activeLink];
    changePosition(newLink);
}

const sendButton = document.getElementById("send");
const chestText = document.getElementById("chester");
const signForm = document.getElementById("signup");

sendButton.addEventListener('click', () =>{
    signForm.remove();
    chestText.append("Thank you for signing up! You may redeem your free class whenever!");
    
});
