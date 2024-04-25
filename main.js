const btnInsertUpdate = document.getElementById("btnInsertUpdate");
const btnClearItems = document.getElementById("btnClearItems");
const btnClear = document.getElementById("btnClear");
const btnSaveData = document.getElementById("btnSaveData");
const tblRecords = document.getElementById("tblRecords");
const sortCriteriaSelect = document.getElementById("sortCriteria");
const sortOrderSelect = document.getElementById("sortOrder");
let arrRecords = JSON.parse(localStorage.getItem('records')) || [];

const tblTHsLabels = ["First Name", "Middle Name", "Last Name", "Age", "Action"];


function iterateRecords() {
   
    tblRecords.innerHTML = "";

    if (arrRecords.length === 0) {
        document.getElementById("status").style.display = "inline";
        document.getElementById("status").innerHTML = "No Records...";
    } else {
        document.getElementById("status").style.display = "none";
        arrRecords.forEach(record => {
            const row = tblRecords.insertRow();
            tblTHsLabels.forEach(label => {
                const cell = row.insertCell();
                cell.textContent = record[label.toLowerCase()] || '';
            });
            const actionCell = row.insertCell();
            actionCell.innerHTML = '<button>Edit</button>';
        });
    }
}

btnInsertUpdate.addEventListener("click", () => {
    const inputTxt = document.getElementsByTagName("input");

    if (btnInsertUpdate.value === "insert") {
        for (const txt of inputTxt) {
            if (txt.value.trim() === "") {
                alert("Please complete all the text inputs!");
                return;
            }
        }

        const infoRecord = {
            fname: inputTxt[0].value.trim(),
            mname: inputTxt[1].value.trim(),
            lname: inputTxt[2].value.trim(),
            age: parseInt(inputTxt[3].value.trim())
        };

     
        arrRecords.push(infoRecord);

       
        localStorage.setItem('records', JSON.stringify(arrRecords));

      
        for (const txt of inputTxt) {
            txt.value = "";
        }

        iterateRecords();
    }
});
