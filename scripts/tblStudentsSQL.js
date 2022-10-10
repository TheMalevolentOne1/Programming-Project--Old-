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

/*stuVals.forEach((arr) => {
    arr.forEach((item) => {
        const stuTD = document.createElement("td");
        document.getElementsByClassName(item).item(0)
        stuTD.innerHTML = item;
    })
});*/