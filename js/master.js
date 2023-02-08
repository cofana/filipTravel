$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
});

const numbers = [1,5,20];
var valuesToChange = Array.from(document.querySelectorAll(".facts-info strong span"));
console.log(valuesToChange);
for(let i =0;i<valuesToChange.length;i++){
  
  setInterval(() => {
    randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
    addNumber(randomNumber,valuesToChange[i])
  }, 1000);
  valuesToChange[i].classList.add("green")
  var arrow = document.createElement("i");
  arrow.classList.add("fas");
  arrow.classList.add("fa-arrow-up");
  arrow.classList.add("green");
  valuesToChange[i].parentElement.append(arrow);
}
function addNumber(number,div) {
  var value = +div.innerHTML + number;
  div.innerHTML = value;
 }

const REGEX_NAME = /^[A-Z][a-zšđčžć]{2,29}$/;
const REGEX_EMAIL =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const REGEX_NUMBER = /^[+][3][8][1]\-[0-9]{2}\/[\d]{6,7}$/;
var pathname = window.location.pathname;
var a = pathname.split("/");
var pathname = a[a.length-1];

var ul = document.querySelectorAll(".navbar-nav")[0];
var toursDiv = document.querySelectorAll(".featured-row")[0];
var galleryDiv = document.getElementById("galleryDiv");
var subscribeButton = document.getElementById("subscribeButton");
var emailError = document.getElementById("emailError");
var notification = document.getElementById("notification");
var nameError = document.getElementById("nameError");
var numberError = document.getElementById("numberError");
var messageError = document.getElementById("messageError");
var emailErrorContact = document.getElementById("emailErrorContact");
var contactButton = document.getElementById("contactButton");
var searchButton = document.getElementById("searchButton");
var menu = [
  {
    href: "index.html",
    text: "Home",
  },
  {
    href: "gallery.html",
    text: "Gallery",
  },
  {
    href: "about.html",
    text: "About",
  },
  {
    href: "contact.html",
    text: "Contact",
  },
];
var tours = [
  {
    imgSrc: "featured-rome.jpg",
    alt: "rome-alt",
    destination: "Rome, Italy",
    text: "Rome is the capital city of Italy. It is the country's most populate comune with a population of 4,355,725 residents",
  },
  {
    imgSrc: "featured-new-york.jpg",
    alt: "new-york-alt",
    destination: "New Your City, USA",
    text: "New York is the most populus city in the United States and it has been described as </br>the cultural, financial, and media capital </br>of the world",
  },
  {
    imgSrc: "featured-berlin.jpg",
    alt: "berlin-alt",
    destination: "Berlin, Germany",
    text: "Berlin is the capital and largest city of Germany with the population of 3.7 milion",
  },
  {
    imgSrc: "featured-fuvahmulah.jpg",
    alt: "fuvamulah-alt",
    destination: "Fuvahmulah, Maldives",
    text: "Fuvamulah City is an island in the Maldives. Fuvahmulah means 'Island of the Areca nut palms', in the local language",
  },
  {
    imgSrc: "featured-paris.jpeg",
    alt: "paris-alt",
    destination: "Paris, France",
    text: "Paris is the capital and most populous city </br> of France. It is filled with many tourist attractions",
  },
  {
    imgSrc: "featured-london.jpeg",
    alt: "london-alt",
    destination: "London, United Kingdoom",
    text: "London is the capital and the largest city of England. The city is home to the most 5-star hotels of any city in the world",
  }
];
var gallery = [
  {
    imgSrc: "popular-1.jpg",
    alt: "paris",
    destination: "Paris, France",
    reviews: 812,
    text: "The well known City of Love, great for couples",
  },
  {
    imgSrc: "popular-2.jpg",
    alt: "miami",
    destination: "Miami, USA",
    reviews: 760,
    text: "Officially the City of Miami, is a coastal </br> metropolis located in Miami-Dade County in southeastern Florida, United States",
  },
  {
    imgSrc: "popular-3.jpg",
    alt: "athens",
    destination: "Athens, Greece",
    reviews: 1244,
    text: "Most visited place by our tourists,</br> lovely beaches  and culture",
  },
  {
    imgSrc: "popular-4.jpg",
    alt: "bali",
    destination: "Bali, Indonesia",
    reviews: 712,
    text: "Bali is renowned for its highly developed arts, including traditional and modern dance,</br> sculpture, painting and music",
  },
  {
    imgSrc: "popular-5.jpg",
    alt: "dubai",
    destination: "Dubai, United Arab Emirates",
    reviews: 850,
    text: "Also known as the City of Future, if you're a fan </br> of modern architecture Dubai's the place for you",
  },
  {
    imgSrc: "popular-6.jpg",
    alt: "newyork",
    destination: "New York City, USA",
    reviews: 984,
    text: "The Big Apple, our company's 2nd runner-up",
  },
  {
    imgSrc: "popular-7.jpg",
    alt: "havana",
    destination: "Havana, Cuba",
    reviews: 689,
    text: "Havana is the capital and largest city of Cuba. </br> The heart of the La Habana province",
  },
  {
    imgSrc: "popular-8.jpg",
    alt: "moscow",
    destination: "Moscow, Russia",
    reviews: 943,
    text: "Moscow is the capital of Russia. The weather is usually pretty cold so if you plan on going there make sure u dress well",
  }
];

ul.innerHTML = outputMenu();
if(["/","","/index.html"].includes(window.location.pathname)){
 
  toursDiv.innerHTML = outputTours();
  searchButton.addEventListener("click",(e)=>{
    e.preventDefault();
    outputNotification("Work in Progress");
  })
}
if (pathname == "gallery.html") galleryDiv.innerHTML = outputGallery();
//#endregion
//#region EVENTS

subscribeButton.addEventListener("click", function (e) {
  e.preventDefault();
  var email = document.getElementById("subscribeEmail").value;
  if (!REGEX_EMAIL.test(email)) {
    emailError.innerText = "Invalid email format try again";
  } else {
    // !NOTIFICATION SHOW
    $.toast({
      heading: "Success",
      text: "Sucessful subscription",
      icon: "success",
    });
  }
});
if(pathname == "contact.html"){
contactButton.addEventListener("click", function (e) {
  e.preventDefault();
  emailErrorContact.innerText = "";
  nameError.innerText = "";
  numberError.innerText = "";
  messageError.innerText = "";
  var errors = [];
  var errorsDivs = [];
  var email = document.getElementById("emailContact").value;
  var name = document.getElementById("nameContact").value;
  var number = document.getElementById("phoneNumber").value;
  var message = document.getElementById("messageContact").value;
  if (!REGEX_EMAIL.test(email)) {
    errors.push("Email is not valid");
    errorsDivs.push(emailErrorContact);
  }
  if (!REGEX_NUMBER.test(number)) {
    errors.push("Number is not valid");
    errorsDivs.push(numberError);
  }
  if (!REGEX_NAME.test(name)) {
    errors.push(
      "Name has to start with capital letter and minimum 3 characters"
    );
    errorsDivs.push(nameError);
  }
  if (message == "") {
    errors.push("Message can't be empty");
    errorsDivs.push(messageError);
  }
  for (let i = 0; i < errors.length; i++) {
    errorsDivs[i].innerText = errors[i];
  }
  if (errors.length == 0) {
    $.toast({
      heading: "Success",
      text: "Sucessfully sent",
      icon: "success",
    });
  }
});
}
//#endregion
//#region FUNTIONS
function outputMenu() {
  var output = "";
  for (let i = 0; i < menu.length; i++) {
    output += "<li class='nav-item'>";
    output += `<a href='${menu[i].href}' class="nav-link">${menu[i].text}</a>`;
    output += "</li>";
  }
  return output;
}
function outputTours() {
  var output = "";
  for (let i = 0; i < tours.length; i++) {
    output += `<div class = "featured-item my-2 shadow"><img src='images/${tours[i].imgSrc}' alt='${tours[i].alt}'/><div class='featured-item-content'><span><i class='fas fa-map-marker-alt'></i> ${tours[i].destination}</span><div><p class='text'>${tours[i].text}</p></div></div></div>`;
  }
  return output;
}
function outputGallery() {
  var output = "";
  for (let i = 0; i < gallery.length; i++) {
    output += `<div class='popular-item shadow'><img src='images/${gallery[i].imgSrc}' alt='${gallery[i].alt}'/><div><span>${gallery[i].destination}</span><ul class='rating flex'><li><i class = "fas fa-star"></i></li><li><i class = "fas fa-star"></i></li><li><i class = "fas fa-star"></i></li><li><i class = "fas fa-star"></i></li><li><i class = "fas fa-star"></i></li><li>&nbsp;${gallery[i].reviews} reviews</li></ul><p class='text'>${gallery[i].text}</p></div></div>`;
  }
  return output;
}
//#endregion
