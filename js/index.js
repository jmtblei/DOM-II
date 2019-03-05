// Your code goes here

// Const
const logo = document.querySelector('.logo-heading');
const anchors = document.querySelectorAll('a');
const busImg = document.querySelectorAll('img');
const topb = document.querySelector('.main-navigation');
const buttons = document.querySelectorAll('.btn');

// Change background color of navigation when 'dblclick'
topb.addEventListener('dblclick', function(e) {
    topb.style.backgroundColor = "#FFEBCD";
})

// Change header text on 'mouseover'
logo.addEventListener('mouseover', function(e) {
    logo.textContent = 'All aboard the PARTY Bus!';
});

// Changes header back to Fun Bus when 'mouseout'
logo.addEventListener('mouseout', function(e) {
    logo.textContent = 'Fun Bus';
});


// Change colors when you 'click' nav links
anchors.forEach(function(e) {
  e.addEventListener('click', function(change) {
    change.target.style.color = "#17A2B8";
  });
});

// Increases img width by 20% when 'mousedown'
busImg.forEach(function(e) {
    e.addEventListener('mousedown', function(down) {
    down.target.style.maxWidth = '120%';
    });
});

// Returns img width to normal when 'mouseup'
busImg.forEach(function(e) {
    e.addEventListener('mouseup', function(up) {
    up.target.style.maxWidth = '';
    });
});

// Changes button text when you 'click'
buttons.forEach(function(index, i) {
    buttons[i].addEventListener('click', function(e) {
        e.target.textContent = 'All aboard!'
    });
});

// Returns a message in the console when you type
document.addEventListener('keydown', function() {
    console.log ('Stop pushing my buttons!');
  });

// Add an alert message when you 'load' the page
window.addEventListener('load', function() {
    alert('Are you ready for an adventure?');
  });

  // Popup alert when you 'scroll' enough
let count = 0;
window.addEventListener('scroll', function() {
    count++; if(count%100===0) {
      alert("Keep on rolling along!");
    }
  }
); 