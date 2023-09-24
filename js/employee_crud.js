let raw_data=[];

function CreateTble(){
    let str="";
    for(let line of raw_data){
        str+="<tr>";
        str+="<td>"+line.employee_id+"</td>";
        str+="<td>"+line.first_name+"</td>";
        str+="<td>"+line.last_name+"</td>";
        str+="<td>"+line.email+"</td>";
        str+="<td>"+line.other_employee_details+"</td>";
        str+="</tr>";
    }
    document.getElementById("mainTable").innerHTML=str;
}

async function getList() {
    let response = await fetch('/Employee/List');
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTble();
}

async function addNewEmployee() {
    let first_name=document.getElementById("first_name").value;
    let last_name=document.getElementById("last_name").value;
    let email=document.getElementById("email").value;
    let other_employee_details=document.getElementById("other_employee_details").value;

    let response = await fetch('/Employee/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ first_name: first_name, last_name: last_name
                , email: email, other_employee_details: other_employee_details})
        }
    );
    getList();
}

async function editEmployee() {
   let objToServer = {};
        objToServer.idx = document.getElementById('edit_employee_id').value;
        objToServer.first_name= document.getElementById('edit_first_name').value;
        objToServer.last_name= document.getElementById('edit_last_name').value;
        objToServer.email = document.getElementById('edit_email').value;
        objToServer.other_employee_details = document.getElementById("edit_other_employee_details").value;

        let response = await fetch(`/Employee/Edit/${objToServer.idx}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objToServer),
        });
    getList();
}

async function deleteEmployee() {
    let employeeId = document.getElementById("employee_id").value;

    let response = await fetch(`/Employee/Delete/${employeeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        getList();
    }
}

getList();