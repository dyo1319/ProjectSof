let raw_data = [];

function CreateTble() {
    let str = "";
    for (let line of raw_data) {
        str += "<tr>";
        str += "<td>" + line.entry_id + "</td>";
        str += "<td>" + line.employee_id + "</td>";
        str += "<td>" + line.employee_name + "</td>";
        str += "<td>" + line.entry_type + "</td>";
        str += "<td>" + line.timestamp + "</td>";
        str += "</tr>";
    }
    document.getElementById("ReportEntry").innerHTML = str;
}

async function GetList() {
    try {
        let response = await fetch('/view/List');
        let data = await response.json();
        console.log("data=", data);
        raw_data = data;
        CreateTble();
    } catch (error) {
        console.error('Error fetching entry/exit data:', error);
    }
}

async function loadEmployeeData() {
    const selectedEmployeeId = document.getElementById('SelectEmployee').value;
    const response = await fetch(`/view/List/${selectedEmployeeId}`);
    const data = await response.json();
    raw_data = data;
    CreateTble();
}

async function populateEmployeeOptions() {
    const selectEmployee = document.getElementById('SelectEmployee');
    const response = await fetch('/Employee/List');
    const data = await response.json();

    selectEmployee.innerHTML = ''; // Clear existing options

    for (const employee of data) {
        const option = document.createElement('option');
        option.value = employee.employee_id;
        option.textContent = employee.first_name + " "+ employee.last_name;
        selectEmployee.appendChild(option);
    }

    GetList();
}

populateEmployeeOptions();