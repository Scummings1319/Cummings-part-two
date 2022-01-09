let membername = prompt("Welcome to GC mini-golf! What is your name?");
let numberofholes= prompt("Hi, " + membername + "! Would you like to play 3 or 6 holes?")
let par= 3 * numberofholes
let total=0;
for (let hole = 1; hole <= numberofholes; hole++){
     let putts = Number( prompt("How many putts for" + hole + "?"));
     total += putts;
}
console.log(membername + " your total par was:" + total + ".")
if (total == par) {
    alert("Good game, " + membername + ". Your total par was: 0");
} else if ( total < par) {
    alert("Great job, " + membername + "! Your total par was: " + (total-par));
} else {
    alert("Nice try, " + membername + "... Your total par was: " + (total-par));
}