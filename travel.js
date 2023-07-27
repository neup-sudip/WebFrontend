//  for menu icons
const selectElement = (element) => document.querySelector(element);
selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});

// for sliding trendings divs
var divs = ["trend-1", "trend-2", "trend-3"];
var btns = ["btn-1", "btn-2", "btn-3"];
var visibleDiv = null;

function makeVisible(divId) {
  if (visibleDiv === divId) {
    //visibleDiv = null;
  } else {
    visibleDiv = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, div, btnId;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    btnId = btns[i];
    div = document.getElementById(divId);
    if (visibleDiv === divId) {
      div.style.display = "block";

      let id = document.getElementById(btnId);
      id.disabled = true;
      id.style.backgroundColor = "white";
      id.style.color = "black";
      id.style.cursor = "not-allowed";
    } else {
      div.style.display = "none";
      let id = document.getElementById(btnId);
      id.disabled = false;
      id.style.backgroundColor = "black";
      id.style.color = "white";
      id.style.cursor = "pointer";
      id.addEventListener("mouseover", function () {
        id.style.backgroundColor = "purple";
      });
      id.addEventListener("mouseout", function () {
        id.style.backgroundColor = "black";
      });
    }
  }
}

window.onscroll = function () {
  bookFunction();
};

function bookFunction() {
  var loc = window.location.href;
  var dest = "destinations.html";

  var topButton = document.getElementById("top-img");
  var bookBtn = document.querySelector(".book-btn");

  if (loc.indexOf(dest) > -1) {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      bookBtn.style.display = "block";
    } else {
      bookBtn.style.display = "none";
    }

    if (
      document.body.scrollTop > 5500 ||
      document.documentElement.scrollTop > 5500
    ) {
      bookBtn.style.display = "none";
    } else {
      // bookBtn.style.display = "block";
    }
  }
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// for booking travel
var greet;
var booking = [];

function takeValue() {
  var empty = 0;
  const formOne = document.querySelector("#book-form");
  const formTwo = document.querySelector("#confirm-form");
  const msz = document.querySelector("#hidden-p");

  const link1 = document.querySelector("#link1");
  const link2 = document.querySelector("#link2");

  const putDest = document.querySelector("#des-sel");
  const putName = document.querySelector("#name-sel");
  const putCode = document.querySelector("#code-sel");
  const putNum = document.querySelector("#num-sel");
  const putCount = document.querySelector("#travel-num-sel");
  const putGender = document.querySelector("#gender-sel");
  const putDate = document.querySelector("#date-sel");

  const destination = document.querySelector("#destinations").value;
  booking.push(destination);

  const fullName = document.querySelector("#full-name").value;
  booking.push(fullName);
  greet = fullName;

  const radios = document.getElementsByName("genderS");
  var gender;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      gender = radios[i].value;
      booking.push(gender);
      break;
    }
  }

  const countryCode = document.querySelector("#country-code").value;
  booking.push(countryCode);

  const contactNum = document.querySelector("#contact-num").value;
  booking.push(contactNum);

  const totalTraveler = document.querySelector("#travel-num").value;
  booking.push(totalTraveler);

  const bookDate = document.querySelector("#date").value;
  booking.push(bookDate);

  console.log(booking);

  console.log(putDest.textContent);

  for (var j = 0; j < booking.length; j++) {
    if (booking[j] === "") {
      empty++;
      if (msz.classList.contains("hidden")) {
        msz.classList.toggle("hidden");
      }
      booking = [];
      break;
    }
  }

  if (empty == 0 && (contactNum < 1000000000 || contactNum > 9999999999)) {
    empty++;
    booking = [];
    msz.textContent = "Please enter 10 digit contact number";
    if (msz.classList.contains("hidden")) {
      msz.classList.toggle("hidden");
    }
  }

  if (empty == 0 && (totalTraveler < 1 || totalTraveler > 10)) {
    empty++;
    booking = [];
    msz.textContent = "Traveller Range is 1 to 9";
    if (msz.classList.contains("hidden")) {
      msz.classList.toggle("hidden");
    }
  }

  console.log(empty);

  if (
    empty == 0 &&
    !formOne.classList.contains("hidden-form") &&
    formTwo.classList.contains("hidden-form")
  ) {
    formOne.classList.toggle("hidden-form");
    formTwo.classList.toggle("hidden-form");
    link1.classList.toggle("hidden");
    link2.classList.toggle("hidden");
  }

  putDest.textContent = destination;
  putName.textContent = fullName;
  putCode.textContent = countryCode;
  putNum.textContent = contactNum;
  putCount.textContent = totalTraveler;
  putGender.textContent = gender;
  putDate.textContent = bookDate;
}

function goBack() {
  const formOne = document.querySelector("#book-form");
  const formTwo = document.querySelector("#confirm-form");
  formOne.classList.toggle("hidden-form");
  formTwo.classList.toggle("hidden-form");
  booking = [];
}

function movePage() {
  window.location.href = "index.html";
}

function displayMsz() {
  var greeting = document.querySelector("#display-msz");
  greeting.classList.toggle("hidden");

  setInterval(movePage, 1500);
}

// for searching
function Scan() {
  const field = document.querySelector("#search-field").value.toLowerCase();
  var items = document.querySelectorAll(".items");

  if (field != "") {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var filter = item.textContent.toLowerCase();
      if (filter.indexOf(field) > -1) {
        // item.classList.toggle("hidden");
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  } else {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var filter = item.textContent.toLowerCase();
      item.style.display = "none";
    }
  }
}

function searchDes() {
  const field = document.querySelector("#search-field").value.toLowerCase();

  if (field === "gosaikunda") {
    window.location.href = "destinations.html#gosaikunda";
  } else if (field === "langtang") {
    window.location.href = "destinations.html#langtang";
  } else if (field === "mardi") {
    window.location.href = "destinations.html#mardi";
  } else if (field === "ghorepani" || field === "poonhill") {
    window.location.href = "destinations.html#poonhill";
  } else {
    window.location.href = "error.html";
  }

  {
    let a = 5;
    console.log(a);
  }

  console.log(a);
}

function showBox() {
  const box = document.querySelector(".direct");
  box.classList.toggle("hidden");
}

function reloadPage() {
  window.location.href = window.location.href;
}

function thanks() {
  const thank = document.querySelector(".thanks");
  const box = document.querySelector(".direct");

  const email = document.querySelector("#email").value;
  const text = document.querySelector("#textarea").value;
  var noMsz = document.querySelector("#no-msz");

  var a = 0;
  if (email == "" && text == "") {
    noMsz.textContent = "Please fill all fields";
    a++;
  } else if (email == "") {
    noMsz.textContent = "Please provide you email";
    a++;
  } else if (text == "") {
    noMsz.textContent = "Please give us your feedback";
    a++;
  }

  if (thank.classList.contains("hidden") && a == 0) {
    thank.classList.toggle("hidden");
  }

  if (!box.classList.contains("hidden") && a == 0) {
    box.classList.toggle("hidden");
    setInterval(reloadPage, 1500);
  }
}

// settings
// settings
function showSettings() {
  const setDiv = document.querySelector(".set-div");
  setDiv.classList.toggle("hidden");
}

var size = "10px";
var opacity = 1;
const Logo = document.querySelector(".logo");
function changeView(One) {
  const html = document.documentElement;

  if (One === "one-1") {
    html.style.backgroundImage = "url('img/mountain3.jpg')";
  }
  if (One === "one-2") {
    html.style.backgroundImage = "url('img/mountain.jpg')";
  }

  if (One === "one-3" && size == "10px") {
    html.style.fontSize = "10.5px";
    size = "10.5px";
  } else if (One === "one-3" && size == "10.5px") {
    html.style.fontSize = "11px";
    size = "11px";
  } else if (One === "one-3" && size == "11px") {
    html.style.fontSize = "11.5px";
    size = "11.5px";
  } else if (One === "one-3" && size == "11.5px") {
    html.style.fontSize = "12px";
    size = "12px";
  }

  if (One === "one-4" && size == "12px") {
    html.style.fontSize = "11.5px";
    size = "11.5px";
  } else if (One === "one-4" && size == "11.5px") {
    html.style.fontSize = "11px";
    size = "11px";
  } else if (One === "one-4" && size == "11px") {
    html.style.fontSize = "10.5px";
    size = "10.5px";
  } else if (One === "one-4" && size == "10.5px") {
    html.style.fontSize = "10px";
    size = "10px";
  }

  if (One === "one-5" && opacity == 0.6) {
    html.style.opacity = "0.8";
    opacity = 0.8;
  } else if (One === "one-5" && opacity == 0.8) {
    html.style.opacity = "1";
    opacity = 1;
  }

  if (One === "one-6" && opacity == 1) {
    html.style.opacity = "0.8";
    opacity = 0.8;
  } else if (One === "one-6" && opacity == 0.8) {
    html.style.opacity = "0.6";
    opacity = 0.6;
  }
}
