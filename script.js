const grid_container = document.querySelector("#grid_container");
const new_grid = document.querySelector("#new_grid");

grid_container.style.display = "flex";
grid_container.style.flexDirection = "column";


function create_grid(num){
    let height = 500
    let reletive_height = height / num

    grid_container.innerHTML = '';
    for(let i = 0; i < num; i++){
        const row = document.createElement("div");
        for(let i = 0; i < num; i++){
            const member = document.createElement("div");
            member.classList.toggle("member");
            row.appendChild(member);
        }
        row.classList.toggle("row")
        grid_container.appendChild(row);
    }

    const rows = document.querySelectorAll(".row");

    const members = document.querySelectorAll(".member");

    rows.forEach(element => {
        element.style.display = "flex"
        element.style.justifyContent = "center";
    });
    
    members.forEach(element => {
        element.style.flex = "1";
        element.style.border = "solid";
        element.style.borderWidth = "1px";
        element.style.padding = `${reletive_height}px`;
        element.style.borderColor = "black";
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "black";
        });
    });

}

function prompt_grid(){
    let num = prompt("How many squares would you like the grid to have (1 - 100)");
    num = parseInt(num);
    if(num >= 1 && num <= 100){
        create_grid(num);
    }
    else{
        alert("Invalid Number");
    }
}

new_grid.addEventListener("click", prompt_grid);


create_grid(16);






