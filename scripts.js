const cities = ["Dhaka", "Chittagong", "Barisal", "Rajshahi"];
let trendingPlace = [
  {
    from: "Dhaka",
    to: "Chittagong",
  },
  {
    from: "Barisal",
    to: "Rajshahi",
  },
  {
    from: "Chittagong",
    to: "Rajshahi",
  },
  {
    from: "Dhaka",
    to: "Rajshahi",
  },
  {
    from: "Dhaka",
    to: "Rajshahi",
  }, 
  {
    from: "Dhaka",
    to: "Rajshahi",
  }, 
  {
    from: "Dhaka",
    to: "Rajshahi",
  }, 
];


const fromOptions = document.getElementById("from");
const toOptions = document.getElementById("to");

const filterOptions = document.querySelectorAll(".filter-option");

const options = document.querySelector(".options");
const optionsf = document.querySelector(".optionsf");
const optionst = document.querySelector(".optionst");
const selectGoingFrom = document.querySelector(".select-going-from");
const selectGoingTo = document.querySelector(".select-going-to");
const switchPlace = document.querySelector(".switch-arrow");
const searchf = document.querySelector(".searchf");
const searcht = document.querySelector(".searcht");
const searchBtn = document.querySelector(".search-btn");
const date = document.querySelector(".date");
const dateReturn = document.querySelector(".date-return");
let tranding = document.querySelector(".tranding-places");


const setOptions = (data, index) => {
  filterOptions[index].innerHTML = "";
  data.forEach(function (city) {
    let option = document.createElement("p");
    option.className = "option";
    option.textContent = city.toUpperCase();
    filterOptions[index].appendChild(option);
  });
};
setOptions(cities, 0);
setOptions(cities, 1);

const setPlace = (place) => {
  const option = document.querySelectorAll(".option");
  option.forEach((opt) => {
    opt.addEventListener("click", () => {
      place.textContent = opt.textContent;
    });
  });
};


searchf?.addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.toLowerCase();
  const searchRegExp = new RegExp(".*" + value + ".*", "i");
  const newCities = cities.filter((tech) => {
    const techName = tech.toLowerCase();
    return searchRegExp.test(techName);
  });
  setOptions(newCities, 0);
  setPlace(selectGoingFrom);
});


searcht?.addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.toLowerCase();
  const searchRegExp = new RegExp(".*" + value + ".*", "i");
  const newCities = cities.filter((tech) => {
    const techName = tech.toLowerCase();
    return searchRegExp.test(techName);
  });
  setOptions(newCities, 1);
  setPlace(selectGoingTo);
});


selectGoingFrom?.addEventListener("click", (event) => {
  event.stopPropagation();
  optionsf?.classList.add("options-from");
  optionst?.classList.remove("options-from");
  searchf.value = "";
  setOptions(cities, 0);
  setPlace(selectGoingFrom);
});


selectGoingTo?.addEventListener("click", (event) => {
  event.stopPropagation();
  optionsf?.classList.remove("options-from");
  optionst?.classList.add("options-from");
  searcht.value = "";
  setOptions(cities, 1);
  setPlace(selectGoingTo);
});


searchf?.addEventListener("click", (event) => {
  event.stopPropagation();
  optionsf?.classList.add("options-from");
  optionst?.classList.remove("options-from");
});


searcht?.addEventListener("click", (event) => {
  event.stopPropagation();
  optionst?.classList.add("options-from");
  optionsf?.classList.remove("options-from");
});


document.querySelector("body")?.addEventListener("click", (event) => {
  optionst?.classList.remove("options-from");
  optionsf?.classList.remove("options-from");
});


switchPlace.addEventListener("click", () => {
  let from = selectGoingFrom?.textContent;
  let to = selectGoingTo?.textContent;
  selectGoingFrom.textContent = to;
  selectGoingTo.textContent = from;
});


trendingPlace.forEach((place) => {
  let p = document.createElement("p");
  p.innerHTML = `${place.from} <i class="fa-solid fa-arrow-right"></i> ${place.to}`;
  p.classList.add("tranding-place");
  tranding?.appendChild(p);
});


const setDateReference = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); 
  const day = String(today.getDate()).padStart(2, "0"); 
  const formattedDate = `${year}-${month}-${day}`;
  date.value = formattedDate;
  dateReturn.value = formattedDate;
};
setDateReference();


searchBtn?.addEventListener("click", () => {
  if (selectGoingFrom?.textContent === "Select Place") {
    alert("select your a place");
    return;
  }
  if (selectGoingTo?.textContent === "Select Place") {
    alert("select a destination place");
    return;
  }
  if (selectGoingFrom?.textContent === selectGoingTo?.textContent) {
    alert("select different places");
    return;
  }
  if (date.value === "") {
    alert("select a date");
    return;
  }
  if (
    new Date(date.value).getTime() / (1000 * 3600 * 24) <
    Math.floor(new Date().getTime() / (1000 * 3600 * 24))
  ) {
    alert("Select a date.");
    return;
  }
  const from = selectGoingFrom.textContent;
  const to = selectGoingTo.textContent;
  const selectedDate = date.value;
  window.location.href = `buses.html?from=${from}&to=${to}&date=${selectedDate}`;
});