// index.js
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('clicked')) {
      button.classList.remove('clicked');
    } else {
      button.classList.add('clicked');
    }
  });
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, clickedElement) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  clickedElement.classList.add("active-link");
  var activeTabContent = document.getElementById(tabname);
  activeTabContent.classList.add("active-tab");

  
  setTimeout(() => {
    activeTabContent.style.opacity = "1";
  }, 10); 

  
  for (tabcontent of tabcontents) {
    if (tabcontent !== activeTabContent) {
      tabcontent.style.opacity = "0";
    }
  }
}
