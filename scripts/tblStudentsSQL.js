const stuTab = document.createElement("table");
document.body.appendChild(stuTab);
stuTab.setAttribute("class","stuTable");

const stuHeadRow = document.createElement("tr");
stuTab.appendChild(stuHeadRow);

const studentObj = window.studentsObj;
const stuKeys = Object.keys(studentObj[0]);
const stuVals = [];

studentObj.forEach((element) => {
    stuVals.push(Object.values(element));
});

console.log(stuVals);

stuKeys.forEach((element) => {
    const stuHeader = document.createElement("th");
    stuHeadRow.appendChild(stuHeader);
    stuHeader.setAttribute("class", element);

    stuHeader.innerHTML = element;
});

stuVals.forEach((element) => {
    console.log(element)
    element.forEach((arr) => {
        if (/^\d+$/.test(arr)) {
            const trow = document.createElement("tr");
            stuTab.appendChild(trow);

            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td2.setAttribute("class","teamName");

            stuTab.appendChild(td1);
            stuTab.appendChild(td2);

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
});

