const List = document.getElementById("list");
List.addEventListener("click",(e) => {
    // console.log(e.target.innerText);
    if(e.target.matches("li")){
        e.target.style.backgroundColor = "red";
    }
})

function addedNewElement() {
    const newElement = document.createElement("li");
    newElement.innerText = "My New Element";
    List.appendChild(newElement);
} 