const DivCapturing = document.getElementById("divCapturing");
const FormCapturing = document.getElementById("formCapturing");
const ButtonCapturing = document.getElementById("btnCapturing");

DivCapturing.addEventListener("click",listener,{
    capture: true, //By Default Capture is false.
});
FormCapturing.addEventListener("click",listener,{
    capture: true; //By Default Capture is false.
});
ButtonCapturing.addEventListener("click",listener,{
    capture: true; //By Default Capture is false.
});


function listener(event){
    // alert("Please Look at your Console.");
    // console.log("Event Bubbling");
    // console.log(event.target);
    // console.log(event.currentTarget);
    console.log(this);
}