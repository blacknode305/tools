let db = {};
if (localStorage.getItem("db")) {
    db = JSON.parse(localStorage.getItem("db"));
}
else {
    db.theme ??= "dark";
    db.calendar ??= [];
    db.income ??= [];
    db.expense ??= [];
}
function saveDB() { 
    localStorage.setItem("db", JSON.stringify(db)) 
};
saveDB();

console.log(db.calendar);

// localStorage.clear();


const nav = document.getElementById('nav'); 
nav.addEventListener('click', (event) => {
    console.log(event.target);

    const pages = document.getElementsByClassName('pageEl'); 
    console.log(pages);
    for (i in pages) {

        console.log(i)
    }
    // for()
});