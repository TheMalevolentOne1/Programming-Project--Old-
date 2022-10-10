const tab = document.createElement("table");
tab.setAttribute("class","Team Table");
document.body.appendChild(tab);


//Pull object from global window from PHP SQL statement
const jsonObj = window.teamsObj;
const arrKeys = Object.keys(jsonObj[0]);
const arrVals = [];

//For every object inside the JSON object
jsonObj.forEach((element) => {
  arrVals.push(Object.values(element));
});


const tHeadRow = document.createElement("tr");
tHeadRow.setAttribute("class","Titles"); 
tab.appendChild(tHeadRow);

//For each obj key from arrKeys create new header
arrKeys.forEach((element) => {
    const theader = document.createElement("th");
    tHeadRow.appendChild(theader);
    theader.setAttribute("class", element);
    theader.innerHTML = element;
});

var c = 0;

arrVals.forEach((element) => element.forEach((item, index) => {
    const tabTR = document.createElement("td");
    tab.appendChild(tabTR);
    if (index % 2 === 0 || index == 0) {
        const tRow = document.createElement("tr");
        tab.appendChild(tRow);
    }

    if (!/^[\d]+$/.test(item)) {
        const button = document.createElement('button');
        tabTR.appendChild(button);
        button.setAttribute("class", "TeamButton");
        button.innerText = item;
    } else {
        tabTR.innerHTML = item; 
    }
}))

const teamsButtonClick = (buttonClicked) => {
    var sql = `SELECT * FROM tblStudents WHERE "Team ID" = "${buttonClicked.innerHTML}"`
    fetch('./sql.php?sql='+sql, {method:'GET'}).then(res => {
        if (!res.ok) {
            console.log('error');
        } else {
            console.log(res)
        }
    }).catch(err => { if (err) throw err})
}


const buttons = document.getElementsByClassName("teamsButton")

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => { teamsButtonClick(buttons[i]) })
}