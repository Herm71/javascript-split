var heading = document.querySelector('.secondary-name a').innerHTML;
var split = heading.split(" ");

var words = ["of", "and", "is"];

document.getElementById("demo").innerHTML = split;
//demo = document.getElementById("demo");
demoTwo = document.getElementById("demoTwo");
demoThree = document.getElementById("demoThree");
demoFour = document.getElementById("demoFour");
demoFive = document.getElementById("demoFive");

function splitFunction() {
    demo.innerHTML = demo.innerHTML + split;
}

function splitFunction1(item, index) {
    demoTwo.innerHTML = demoTwo.innerHTML + "[" + index + "]:" + item + "<br>";
}

function splitFunction2(item, index) {
    if (item == "of") {
        demoThree.innerHTML = demoThree.innerHTML + "true![" + index + "]<br>";
    } else {
        demoThree.innerHTML = demoThree.innerHTML + "Keep trying";
    }

}

split.forEach(splitFunction1);

split.forEach(splitFunction2);

var found = false;
for (var i = 0; i < split.length && !found; i++) {
    if (words.indexOf(split[i])) {
        //found = true;
        split[i] = "<span class='connector'>" + split[i] + "</span>";
        demoFour.innerHTML = split[i];
        // break;
    }
}

for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < words.length; j++) {
        if (split[i] == words[j]) {
            split[i] = "<span class='new-font'>" + split[i] + "</span>";
            demoFive.innerHTML = split[i];
        }
    }
}


var daysArray = ["1", "2", "3", "4", "5"];
var courseHwork = ["4", "8", "15", "16", "23", "42"];

for (var i = 0; i < courseHwork.length; i++) {
    for (var j = 0; j < daysArray.length; j++) {
        if (courseHwork[i] == daysArray[j]) {
            $('div:contains("' + daysArray[j] + '")').append("<div class='assignment'>" + courseHwork[i] + " - appended</div><br />");
        }
    }
}

// jQuery(document).ready(function() {
//     jQuery(".secondary-name a").html(function(index, oldHtml) {
//         var split = oldHtml.split(' ');
//         return split[0] + ' <span class="connector"> ' + split[1] + ' </span> ' + split[2];
//     });
// });