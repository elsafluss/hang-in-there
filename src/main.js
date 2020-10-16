// query selector variables go here 👇
function posterCreation(urlInput,titleInput,quoteInput,customPoster) {
var urlInput = document.querySelector("#poster-image-url").value //the input for the url field
var titleInput = document.querySelector("#poster-title").value //the input for the title field
var quoteInput = document.querySelector("#poster-quote").value //the input for the quote field
var customPoster = new Poster(urlInput, titleInput, quoteInput)
return customPoster;
}

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

//generate random poster upon inital loading
document.querySelector("body").onload = function () {
  document.getElementsByClassName("poster-img")[0].src = images[getRandomIndex(images)];
  document.getElementsByClassName("poster-title")[0].innerHTML = titles[getRandomIndex(titles)];
  document.getElementsByClassName("poster-quote")[0].innerHTML = quotes[getRandomIndex(quotes)];
};
//return user to main page upon nevermind take me back button click
document.getElementsByClassName("show-main")[0].onclick = function () {
  document.getElementsByClassName("main-poster")[0].classList.toggle("hidden");
  document.getElementsByClassName("poster-form")[0].classList.toggle("hidden");
}

//generate random poster upon random poster button click
document.getElementsByClassName("show-random")[0].onclick = function () {
  document.getElementsByClassName("poster-img")[0].src = images[getRandomIndex(images)];
  document.getElementsByClassName("poster-title")[0].innerHTML = titles[getRandomIndex(titles)];
  document.getElementsByClassName("poster-quote")[0].innerHTML = quotes[getRandomIndex(quotes)];
  document.getElementsByClassName("save-poster")[0].disabled = false;
};

//switch to poster create form on "make your own poster" button click
document.getElementsByClassName("show-form")[0].onclick = function () {
  document.getElementsByClassName("main-poster")[0].classList.toggle("hidden");
  document.getElementsByClassName("poster-form")[0].classList.toggle("hidden");
  document.getElementsByClassName("save-poster")[0].disabled = false;
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
document.getElementsByClassName("save-poster")[0].onclick = function () {
  event.preventDefault();
  // document.getElementsByClassName("poster-form")[0].classList.toggle("hidden");
  document.getElementsByClassName("saved-posters")[0].classList.toggle("hidden");
  images.push(document.getElementsByClassName("poster-img")[0].src) //add custom image to image array
  titles.push(document.getElementsByClassName("poster-title")[0].innerHTML)  //add custom title to title array
  quotes.push(document.getElementsByClassName("poster-quote")[0].innerHTML)  //add custom quote to quote array
  var customPoster = new Poster(images[images.length-1], titles[titles.length-1], quotes[quotes.length-1]);
  console.log(customPoster);
  savedPosters.push(customPoster);
  document.getElementsByClassName("save-poster")[0].disabled = true;
 }
//show saved posters upon show saved posters button click
 // document.getElementsByClassName("show-saved")[0].onclick = function () {
 //   document.getElementsByClassName("main-poster")[0].classList.toggle("hidden");
 //   document.getElementsByClassName("saved-posters")[0].classList.toggle("hidden");
 //   console.log(savedPosters[0].imageURL);
 //   document.getElementsByClassName("saved-posters-grid")[0].innerHTML = `
 //    <p>"Hello"</p>
 //    <img src='savedPosters[0].imageURL'>
 //   `;
 //   document.getElementsByClassName("saved-posters-grid")[0].innerHTML = `
 //    <p>
 //    ${document.getElementsByClassName("poster-img")[0].src = savedPosters[0].imageURL};
 //    ${document.getElementsByClassName("poster-title")[0].innerHTML = savedPosters[0].title};
 //    ${document.getElementsByClassName("poster-quote")[0].innerHTML = savedPosters[0].quote};
 //    </p>
 //
 //   `;


    //inserts the saved posters into the saved posters article
 }
//return to main after clicking back to main button
 document.getElementsByClassName("back-to-main")[0].onclick = function () {
   document.getElementsByClassName("main-poster")[0].classList.toggle("hidden");
   document.getElementsByClassName("saved-posters")[0].classList.toggle("hidden");
 }
//console.log(customPoster.id) //can access that specific poster by this id



//savedPosters.push(customPoster) //adds poster into saved posters array on "save this poster" button push

//display the poster that was just created


// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// class Poster {
//   constructor(imageURL, title, quote) {
//     this.id = Date.now();
//     this.imageURL = imageURL;
//     this.title = title;
//     this.quote = quote;
//   }
// }
