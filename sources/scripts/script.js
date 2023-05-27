// Get brower width to set value in isHide variable
const browerWidth = window.innerWidth;
console.log(browerWidth);
// Get bar button element
const barButton = document.getElementById("bar-button");
// Get item element in nav bar
const navItem = document.getElementsByClassName("nav-item");
// Create isHide variable to decide whether to show nav item or not
let isHide = false;

// Change isHide depend browerWidth
if (browerWidth <= 1024) {
    isHide = true;
}

// Show or hide item in nav bar
const switchNavItemDisplay = () => {
    // switch isHide variable. true => false or false => true
    isHide = !isHide;
    // If nav item is hidden display them
    if (isHide) {
        for(let i = 0; i < navItem.length; i++) {
            navItem[i].style.visibility = "hidden";
        }
    }
    // Else hide them
    else {
        for(let i = 0; i < navItem.length; i++) {
            navItem[i].style.visibility = "visible";
        }
    }
}

// Add Event
barButton.addEventListener("click", switchNavItemDisplay);