const Div = document.getElementById("divBubbling");
const Form = document.getElementById("formBubbling");
const Button = document.getElementById("btnBubbling");

Div.addEventListener("click",listener);
Form.addEventListener("click",listener);
Button.addEventListener("click",listener);


function listener(event){
    // console.log("Event Bubbling");
    console.log(event.target);
}