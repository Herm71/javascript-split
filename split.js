var heading = document.querySelector('.secondary-name a').innerHTML;
var split = heading.split(" ");

var words = new Array("of", "and", "is");

demoP = document.getElementById("demoTwo");
document.getElementById("demo").innerHTML = split;
demoL = document.getElementById("demoThree");

function splitFunction(item, index) {
    demoP.innerHTML = demoP.innerHTML + "index[" + index + "]:" + item + "<br>";
}

function splitFunction2(item) {
    if (item == "of") {
        demoL.innerHTML = demoL.innerHTML + "true!";
    }
}

split.forEach(splitFunction);

var findOne = function(split, words) {
    return words.some(function(v) {
        return split.indexOf(v) >= 0;
    });
};


// var myButton = document.querySelector('button');

// var myHeading = document.querySelector('h1');

// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContext = 'Blackbirds are cool, ' + myName;
// }

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Blackbirds are cool, ' + storedName;
// }

// myButton.onclick = function() {
//     setUserName();
// }

// jQuery(document).ready(function() {
//     jQuery(".secondary-name a").html(function(index, oldHtml) {
//         var split = oldHtml.split(' ');
//         return split[0] + ' <span class="connector"> ' + split[1] + ' </span> ' + split[2];
//     });
// });