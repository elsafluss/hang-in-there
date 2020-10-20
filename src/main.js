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
var showMyPosterButton = document.querySelector(".make-poster");
var backToMainButton = document.querySelector(".back-to-main")

var savedPostersGrid = document.querySelector(".saved-posters-grid");
var miniPosters = document.querySelector(".mini-posters");
var body = document.querySelector("body")
var form = document.querySelector("form")

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
showMyPosterButton.addEventListener("click", showThePoster)
backToMainButton.addEventListener("click", goToMain)
savedPostersGrid.addEventListener("dblclick", getPosterPosition)

// functions and event handlers go here 👇
//displays the saved posters on the saved posters page, in a grid
function createPosterForGrid(savedPosters) {
  for (var i = 0; i <= savedPosters.length - 1; i++) {
    document.getElementsByClassName("saved-posters-grid")[0].innerHTML += `
      <div class="mini-poster" id=${savedPosters[i].id}>
        <span><img src="${savedPosters[i].imageURL}"></span>
        <h2>${savedPosters[i].title}</h2>
        <h4>${savedPosters[i].quote}</h4>
      </div>`
  }
}

//🌀  RANDOM POSTERS  🌀
//generates random number, up to the length of an array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//generate and show random poster upon inital loading
body.onload = loadRandomPoster

//generates random poster when Show Random Poster button is clicked
function generateRandomPoster() {
  imageQuery.src = images[getRandomIndex(images)];
  titleQuery.innerHTML = titles[getRandomIndex(titles)];
  quoteQuery.innerHTML = quotes[getRandomIndex(quotes)];
  savePosterButton.disabled = false;
};

//gets a random element from each array
function loadRandomPoster() {
  imageQuery.src = images[getRandomIndex(images)];
  titleQuery.innerHTML = titles[getRandomIndex(titles)];
  quoteQuery.innerHTML = quotes[getRandomIndex(quotes)];
};

//⬇️  NAVIGATION  ⬇️
//displays main page, from saved posters page
function goToMain() {
  mainPageQuery.classList.toggle("hidden");
  hiddenSavedPageQuery.classList.toggle("hidden");
  savedPostersGrid.innerHTML = [];
}

//displays main page, from poster form page
function takeMeBack() {
  mainPageQuery.classList.toggle("hidden");
  hiddenFormPageQuery.classList.toggle("hidden");
}

//displays make your own poster page
function goToPosterForm() {
  mainPageQuery.classList.toggle("hidden");
  hiddenFormPageQuery.classList.toggle("hidden");
  savePosterButton.disabled = false;
};

//displays saved posters grid page
function goToSavedPosters() {
  mainPageQuery.classList.toggle("hidden");
  hiddenSavedPageQuery.classList.toggle("hidden");
  createPosterForGrid(savedPosters);
}

//📄  FORM  📄
//display user-generated poster, from form page
function showThePoster() {
  event.preventDefault();
  var urlInput = document.querySelector("#poster-image-url").value
  var titleInput = document.querySelector("#poster-title").value
  var quoteInput = document.querySelector("#poster-quote").value
  var customPoster = new Poster(urlInput, titleInput, quoteInput);
  mainPageQuery.classList.toggle("hidden");
  hiddenFormPageQuery.classList.toggle("hidden");
  imageQuery.src = urlInput;
  titleQuery.innerHTML = titleInput;
  quoteQuery.innerHTML = quoteInput;
}

//get user-generated poster information and save it, on main page
function saveUserPoster() {
  event.preventDefault();
  images.push(imageQuery.src)
  titles.push(titleQuery.innerHTML)
  quotes.push(quoteQuery.innerHTML)
  var customPoster = new Poster(images[images.length - 1], titles[titles.length - 1], quotes[quotes.length - 1]);
  savedPosters.push(customPoster);
  savePosterButton.disabled = true;
}

//🛑  DELETING POSTERS  🛑
//removes selected poster from savedPosters array, clears the grid, and redraws it
function deleteThisPoster(timeStamp) {
  //add alert, ask yes/no
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i]["id"] == timeStamp) {
      savedPosters.splice(i, 1)
      savedPostersGrid.innerHTML = []
      createPosterForGrid(savedPosters)
    }
  }
}

//gets unique ID for each poster
function getPosterPosition(e) {
  switch (e.target.nodeName) {
    case "DIV":
      deleteThisPoster(e.target.id);
      break;
    case "IMG":
      deleteThisPoster(e.target.parentNode.parentNode.id);
      break;
    case "SPAN":
      deleteThisPoster(e.target.parentNode.id);
      break;
    case "H2":
      deleteThisPoster(e.target.parentNode.id);
      break;
    case "H3":
      deleteThisPoster(e.target.parentNode.id);
      break;
  }
}