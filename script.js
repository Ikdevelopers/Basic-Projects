const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

boxes.forEach(function(box){
    box.addEventListener("click", function(e){
        if(e.target.id === "gray"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "white"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "blue"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "yellow"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "green"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "black"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "orange"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "purple"){body.style.backgroundColor = e.target.id;}
        if(e.target.id === "pink"){body.style.backgroundColor = e.target.id;}
    })
})