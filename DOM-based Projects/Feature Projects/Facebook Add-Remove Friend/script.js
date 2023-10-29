//From ChatGPT - https://chat.openai.com/c/a81fa710-bd40-4098-a707-78f4825771c9
// Placing your script within the DOMContentLoaded event listener ensures that
//the JavaScript code will execute after the DOM has been fully loaded, allowing the button variable to correctly reference the button element.

// document.addEventListener("DOMContentLoaded", function() { 
    var button = document.querySelector("#btn")
    var relation = document.querySelector(".relation")
    var flag = 0
    button.addEventListener("click", function(){
        if(flag==0)
        {
            relation.innerHTML = "Friends"
            relation.style.color = "green"
            btn.innerHTML = "Remove Friend"
            btn.style.backgroundColor = "gray"
            flag=1
        }
        else{
            relation.innerHTML = "Strangers"
            relation.style.color = "red"
            btn.innerHTML = "Add Friend"
            btn.style.backgroundColor = "lightgreen"
            flag=0
        }
    });
// });
