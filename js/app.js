// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// Button to speak text
var speakButton = document.querySelector('button');

// Arrays for different parts of the sentence
let array1 = ["The cow", "The horse", "The pig", "The sheep", "The chicken", "The duck", "The farmer"];
let array2 = ["jumped over", "ran away from", "played with", "chased", "ate", "danced with"];
let array3 = ["a big", "a little", "a friendly", "a noisy", "a happy", "a sleepy"];
let array4 = ["cat", "dog", "mouse", "rabbit", "bird", "frog", "cow"];
let array5 = ["in the barn", "on the farmyard", "in the meadow", "near the pond", "under the tree", "across the field"];

var arrayofarrays = [array1, array2, array3, array4, array5];

/* Functions
-------------------------------------------------- */
// Function to speak the given text
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

// Function to read the story
function speakstory(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

// Event listener for subject button
document.getElementById("1").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array1.length);
    string1 = array1[randomindex];
    document.getElementById("area1").value = string1;
});

// Event listener for verb button
document.getElementById("2").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array2.length);
    string2 = array2[randomindex];
    document.getElementById("area2").value = string2;
});

// Event listener for adjective button
document.getElementById("3").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array3.length);
    string3 = array3[randomindex];
    document.getElementById("area3").value = string3;
});

// Event listener for noun button
document.getElementById("4").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array4.length);
    string4 = array4[randomindex];
    document.getElementById("area4").value = string4;
});

// Event listener for object button
document.getElementById("5").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array5.length);
    string5 = array5[randomindex];
    document.getElementById("area5").value = string5;
});

// Event listener for Read Sentence Aloud button
document.getElementById("speak").addEventListener("click", function() {
    addedstring = combine(string1, string2, string3, string4, string5);
    document.getElementById("area").value = addedstring;
    speakNow(addedstring);
});

// Function to combine the strings
function combine(string1, string2, string3, string4, string5) {
    let newstring = string1 + " " + string2 + " " + string3 + " " + string4 + " " + string5;
    return newstring;
}

// Event listener for Generate a Story button
document.getElementById("story").addEventListener("click", function() {
    storystring = "";
    for (let j = 1; j <= 20; j++) {
        for (let i = 0; i < arrayofarrays.length; i++) {
            let randomindex = Math.floor(Math.random() * arrayofarrays[i].length);
            storystring += arrayofarrays[i][randomindex] + " ";
        }
        if (storystring.endsWith(" ")) {
            storystring = storystring.trim() + ". ";
        }
    }
    document.getElementById("storyarea").value = storystring;
});

// Event listener for Read Story Aloud button
document.getElementById("speakstory").addEventListener("click", function() {
    speakstory(storystring);
});

// Event listener for Stop Reading button
document.getElementById("stopspeaking").addEventListener("click", function() {
    synth.cancel();
});

// Reset button functionality
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("area1").value = "";
    document.getElementById("area2").value = "";
    document.getElementById("area3").value = "";
    document.getElementById("area4").value = "";
    document.getElementById("area5").value = "";
    document.getElementById("area").value = "";
    document.getElementById("storyarea").value = "";
    string1 = ""; string2 = ""; string3 = ""; string4 = ""; string5 = ""; storystring = "";
});
