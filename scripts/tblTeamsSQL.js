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

arrVals.forEach((element) => {
    element.forEach((arr) => {
        if (/^\d+$/.test(arr)) {
            const tr = document.createElement("tr");
            tab.appendChild(tr);

            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td2.setAttribute("class","teamName");

            tab.appendChild(td1);
            tab.appendChild(td2);

            td1.innerHTML = arr;
        } else {
            const row = document.getElementsByClassName("teamName").item(c);
            const button = document.createElement("button");
            button.setAttribute("class","teamsButton")
            button.innerText = arr;
            row.appendChild(button);
            c++;
        }
    });
})

const teamsButtonClick = (buttonClicked) => {
    var sql = `SELECT * FROM tblStudents WHERE "Team ID" = ${buttonClicked.innerHTML}`
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