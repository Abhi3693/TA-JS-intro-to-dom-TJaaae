
let allPeople = [];

for (let house of got.houses){
    for(let person of house.people){
        allPeople.push(person);
    }
}

let ul = document.querySelector("ul");

let final = allPeople.forEach((elm) => {
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.src = elm.image;

    let span = document.createElement("span");
    span.innerText = elm.name;
    
    
    let p = document.createElement("p");
    p.innerText = elm.description;

    let button = document.createElement("button");

    let a = document.createElement("a");
    a.innerText = "Learn More!";
    a.href = elm.wikiLink;

    let div = document.createElement("div");
    div.append(img,span)

    button.append(a);

    li.append(div,p,button);

    ul.append(li);
    
})