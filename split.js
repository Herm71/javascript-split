var heading = document.querySelector('.secondary-name a').innerHTML;
var split = heading.split(" ");

var words = ["of", "and", "is"];


demoP = document.getElementById("demoTwo");
document.getElementById("demo").innerHTML = split;
demoL = document.getElementById("demoThree");
demoM = document.getElementById("demoFour");
demoN = document.getElementById("demoFive");

function splitFunction(item, index) {
    demoP.innerHTML = demoP.innerHTML + "[" + index + "]:" + item + "<br>";
}

function splitFunction2(item, index) {
    if (item == words) {
        demoL.innerHTML = demoL.innerHTML + "true![" + index + "]<br>";
    } else {
        demoL.innerHTML = demoL.innerHTML + "Keep trying";
    }

}

words.forEach(splitFunction);

split.forEach(splitFunction2);

var found = false;
for (var i = 0; i < split.length && !found; i++) {
    if (split[i] === "of") {
        //found = true;
        split[i] = "<span class='connector'>" + split[i] + "</span>";
        demoM.innerHTML = split[i];
        // break;
    }
}

for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < words.length; j++) {
        if (split[i] == words[j]) {
            split[i] = "<span class='new-font'>" + split[i] + "</span>";
            demoN.innerHTML = split[i];
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