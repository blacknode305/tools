let db = {};
if (localStorage.getItem("db")) {
    db = JSON.parse(localStorage.getItem("db"));
}
else {
    db.theme ??= "dark";
    db.finance ??= [];
    db.income ??= [];
    db.expense ??= [];
}
function saveDB() { 
    localStorage.setItem("db", JSON.stringify(db)) 
};
saveDB();