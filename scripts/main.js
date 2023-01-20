let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("navbar");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = "active";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    document.get

  }



