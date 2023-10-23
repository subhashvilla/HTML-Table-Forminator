const form = document.getElementById("form");
const name = document.getElementById("name");
const rollNo = document.getElementById("roll no");
const email = document.getElementById("email");
const year = document.getElementById("Year");
const department = document.getElementById("department");


form.addEventListener("submit", () => {
    let userObj = {
        name: name.value,
        rollNo: rollNo.value,
        email: email.value,
        year: year.value,
        department: department.value
    };
    let tabData = '';
    for (let key in userObj) {
        tabData += `<td>${userObj[key]}</td>`
        // console.log("tableData")

    }
    document.getElementById('ta').innerHTML += `<tr> ${tabData} </tr>`;
    const inputs = document.querySelectorAll('#name, #rollNo,#email,#Year,#department');

    inputs.forEach(input => {
        input.value = '';
    });

})

//     // let tabledata = `<tr>
//     //                       <td>${Name.value}</td>
//     //                       <td>${rollNo.value}</td>
//     //                       <td>${email.value}</td>
//     //                       <td>${year.value}</td>
//     //                       <td>${department.value}</td>

//     //                 </tr>`;
//     // document.getElementById('ta').innerHTML += tabledata;
// })