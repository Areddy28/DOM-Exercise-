"use: strict"; 

function main() {

    // Exercise start
    //1
    document.querySelector("#grow-me").classList.add("big");

    //2
    document.querySelector("#shrink-me").classList.remove("big");
    
    //3 
    document.querySelectorAll("li").forEach(function(li) {
        console.log(li.textContent); 
    })
    //other ways to do #3
    //for (let li of document.querySelectorAll("li")) {
        //console.log(li.textContent);
    // for (let i = 0; i < document.querySeclectorAll("li").length; i++) {
            //console.log(document.querySelectorAll("li")[i].textContent); 
    //}    
}

    //4 
    document.querySelector("a").setAttribute("href", "https://www.example.com"); 
    document.querySelector("a").textContent = "somewhere"

    //5 
    document.querySelector("#hide-me").style.display = "none"; 

    //6 
    document.querySelector("#show-me").style.display = "block"; 

    //7
    let inputValue = document.querySelector("#name").value; 
    //document.querySelector("h1").textContent = "Welcome" + inputValue; 
    document.querySelector("h1").textContent = `Welcome ${inputValue}!!!`; 




//other ways to make a function
//let main = function () {} 