async function GetEmployees() {
    let response = await fetch('/Employee/List');
    let data = await response.json();
    console.log("data=", data);
    let s = '';
    for (let row of data) {
        s += `<option value="${row.employee_id}">${row.first_name}</option>`;
    }
    document.getElementById("Selectemployee").innerHTML = s;
}
function CreateTble(){
    let str="";
    for(let line of raw_data){
        str+="<tr>";
        str+="<td>"+line.entry_id+"</td>";
        str+="<td>"+line.employee_id+"</td>";
        str+="<td>"+line.employee_name+"</td>";
        str+="<td>"+line.entry_type+"</td>";
        str+="<td>"+line.timestamp+"</td>";
        str+="</tr>";
    }
    document.getElementById("ReportEntry").innerHTML=str;
}
document.addEventListener('DOMContentLoaded', () => {
    const entryButton = document.getElementById('entryButton');
    const exitButton = document.getElementById('exitButton');
    const responseDiv = document.getElementById('response');
    const exitResponseDiv = document.getElementById('exitResponse');

    entryButton.addEventListener('click', recordEntry);

    exitButton.addEventListener('click', recordExit);
});
const responseDiv = document.getElementById('response');
async function recordEntry() {
    try {
        const selectedEmployeeId = document.getElementById('Selectemployee').value;
        const selectedEmployeeFirstName = document.getElementById('Selectemployee').selectedOptions[0].textContent;
        const response = await fetch('/Reportentry/Entry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                employee_id: selectedEmployeeId,
                employee_name: selectedEmployeeFirstName,
            }),
        });

        if (response.ok) {
            const responseData = await response.json();
            GetList();
            responseDiv.textContent = responseData.message;
        } else {
            console.error('Failed to record entry.');
        }
    } catch (error) {
        console.error('Error recording entry:', error);
    }
}

const exitResponseDiv = document.getElementById('exitResponse');

async function recordExit() {
    try {
        const selectedExitEmployeeId = document.getElementById('Selectemployee').value;
        const selectedExitEmployeeFirstName = document.getElementById('Selectemployee').selectedOptions[0].textContent;
        const response = await fetch('/Reportentry/Exit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                employee_id: selectedExitEmployeeId,
                employee_name: selectedExitEmployeeFirstName,
            }),
        });

        if (response.ok) {
            const responseData = await response.json();
            GetList();
            exitResponseDiv.textContent = responseData.message;
        } else {
            console.error('Failed to record exit.');
        }
    } catch (error) {
        console.error('Error recording exit:', error);
    }
}

async function GetList() {
    let response = await fetch('/Reportentry/List');
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTble();
}
GetList();
GetEmployees();
