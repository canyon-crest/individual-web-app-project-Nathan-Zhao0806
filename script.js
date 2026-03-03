// add javascript 
document.getElementById("button").addEventListener("click", () => {
    document.getElementById("para"). toggleAttribute("hidden");
});
document.getElementById("coolbutton").addEventListener("click", () => {
    let cool = document.getElementById("cool");
    let coollist =document.getElementById("coollist");
    if(cool.value.trim() != ""){
        const colist = document.createElement("li");
        colist.textContent = cool.value;
        coollist.appendChild(colist);
        cool.value = "";
    }});