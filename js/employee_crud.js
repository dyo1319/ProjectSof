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
    let response = await fetch('/List');
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
    let response = await fetch('/Add', {
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

// Assuming you have already included the necessary JavaScript libraries and dependencies


async function deleteEmployee() {
    let employeeId = document.getElementById("employee_id").value;

    let response = await fetch('/Delete/' + employeeId, {
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