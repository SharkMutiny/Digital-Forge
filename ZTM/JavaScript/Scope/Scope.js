// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// answer = 3 (because a is modified before the alert)


//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// answer = 0 (because a is not modified until q2 is called)


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// answer = undefined (because a is not set until q3 is called)


//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// answer = "test" (because local scope variable takes precedence over global scope variable)


//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// answer = 5 (because it's function scoped, so the a inside the if block overwrites the global a)