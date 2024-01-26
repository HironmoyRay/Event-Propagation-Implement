const DivBubbling = document.getElementById("divBubbling");
const FormBubbling = document.getElementById("formBubbling");
const ButtonBubbling = document.getElementById("btnBubbling");

DivBubbling.addEventListener("click",listener);
FormBubbling.addEventListener("click",listener);
ButtonBubbling.addEventListener("click",listener);


function listener(event){
    alert("Please Look at your Console.");
    // console.log("Event Bubbling");
    // console.log(event.target);
    // console.log(event.currentTarget);
    console.log(this);
}