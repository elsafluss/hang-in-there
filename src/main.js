// query selector variables go here 👇
var imageQuery = document.querySelector(".poster-img");
var titleQuery = document.querySelector(".poster-title");
var quoteQuery = document.querySelector(".poster-quote");

var mainPageQuery = document.querySelector(".main-poster");
var hiddenFormPageQuery = document.querySelector(".poster-form");
var hiddenSavedPageQuery = document.querySelector(".saved-posters");

var makePosterButton = document.querySelector(".show-form");
var showRandomButton = document.querySelector(".show-random");
var savePosterButton = document.querySelector(".save-poster");
var showSavedButton = document.querySelector(".show-saved");
var takeMeBackButton = document.querySelector(".show-main");

var savedPostersGrid = document.querySelector(".saved-posters-grid");
var miniPosters = document.querySelector(".mini-posters");

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
showRandomButton.addEventListener("click", generateRandomPoster);
takeMeBackButton.addEventListener("click", takeMeBack);
makePosterButton.addEventListener("click", goToPosterForm);
showSavedButton.addEventListener("click", goToSavedPosters);
savePosterButton.addEventListener("click", saveUserPoster);
// miniPosters.addEventListener("dblclick", getPosterPosition);


// savedPostersGrid.addEventListener("dblclick",test);

// function miniposterLocation() {
//   (".saved-posters-grid").on("dblclick", "div", function(e){
//     getPosterPosition($(this).index());
//     console.log("test");
//     console.log("getPosterPosition");
//   })
// };



//generate random poster upon inital loading
document.querySelector("body").onload = function () {
  document.querySelector(".poster-img").src = images[getRandomIndex(images)];
  document.getElementsByClassName("poster-title")[0].innerHTML = titles[getRandomIndex(titles)];
  document.getElementsByClassName("poster-quote")[0].innerHTML = quotes[getRandomIndex(quotes)];
};

//creates user-poster on "show my poster" button click
document.getElementsByClassName("poster-form")[0].querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  var urlInput = document.querySelector("#poster-image-url").value //the input for the url field
  var titleInput = document.querySelector("#poster-title").value //the input for the title field
  var quoteInput = document.querySelector("#poster-quote").value //the input for the quote field
  var customPoster = new Poster(urlInput, titleInput, quoteInput);
  document.getElementsByClassName("main-poster")[0].classList.toggle("hidden"); //toggles main page and form
  document.getElementsByClassName("poster-form")[0].classList.toggle("hidden");
  document.getElementsByClassName("poster-img")[0].src = urlInput; //displays user image on main page
  document.getElementsByClassName("poster-title")[0].innerHTML = titleInput; //displays user title on main page
  document.getElementsByClassName("poster-quote")[0].innerHTML = quoteInput; //displays user quote on main page

}
//save user generated poster when save poster button is clicked
function saveUserPoster() {
  event.preventDefault();
  images.push(imageQuery.src) //add custom image to image array
  titles.push(titleQuery.innerHTML) //add custom title to title array
  quotes.push(quoteQuery.innerHTML) //add custom quote to quote array
  var customPoster = new Poster(images[images.length - 1], titles[titles.length - 1], quotes[quotes.length - 1]);
  savedPosters.push(customPoster);
  document.getElementsByClassName("save-poster")[0].disabled = true;
}

function createPosterForGrid(savedPosters) {
  for (var i = 0; i <= savedPosters.length - 1; i++) {
    document.getElementsByClassName("saved-posters-grid")[0].innerHTML += `
<div class="mini-poster">
<span><img src="${savedPosters[i].imageURL}"></span>
<h2>${savedPosters[i].title}</h2>
<h4>${savedPosters[i].quote}</h4>
</div>`
  }
}

//return to main after clicking back to main button
document.getElementsByClassName("back-to-main")[0].onclick = function () {
  document.getElementsByClassName("main-poster")[0].classList.toggle("hidden");
  document.getElementsByClassName("saved-posters")[0].classList.toggle("hidden");
  document.getElementsByClassName("saved-posters-grid")[0].innerHTML = [];
}

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomPoster() {
  imageQuery.src = images[getRandomIndex(images)];
  titleQuery.innerHTML = titles[getRandomIndex(titles)];
  quoteQuery.innerHTML = quotes[getRandomIndex(quotes)];
  savePosterButton.disabled = false;
};

function takeMeBack() {
  mainPageQuery.classList.toggle("hidden");
  hiddenFormPageQuery.classList.toggle("hidden");
}

function goToPosterForm() {
  mainPageQuery.classList.toggle("hidden");
  hiddenFormPageQuery.classList.toggle("hidden");
  savePosterButton.disabled = false;
};

function goToSavedPosters() {
  mainPageQuery.classList.toggle("hidden");
  hiddenSavedPageQuery.classList.toggle("hidden");
  createPosterForGrid(savedPosters);
}
function getPosterPosition(){
  const colCount = 3;
  const length = savedPosters.length -1;
  const rowPosition = Math.floor(length/ colCount);
  const colPosition = length % colCount;
  var posterPostion = {row: rowPosition, column: colPosition};
  console.log(posterPostion);
}
