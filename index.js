const paragraph = document.getElementById('paragraph');
const changeButton = document.getElementById('changeButton');

//add event listener
changeButton.addEventListener("click", function() {
    paragraph.textContent = "You're too shy to say you like this";
});

//update paragraph
const textInput = document.getElementById("textInput");

//add event listener
textInput.addEventListener("input", function(){
    paragraph.textContent = textInput.value;
})