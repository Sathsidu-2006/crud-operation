let tableDetail = document.getElementById("tableDetail");

// let Id = document.getElementById("txtId").value;
// let Name = document.getElementById("txtName").value;
// let Age = document.getElementById("txtAge").value;
// let Address = document.getElementById("txtId").value;

// localStorage.clear();

let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnAddCustomer(){
    
    let customer ={
        id:  document.getElementById("txtId").value,
        name:  document.getElementById("txtName").value,
        age : document.getElementById("txtAge").value,
        address : document.getElementById("txtAddress").value

    }
    customerList.push(customer);
    // console.log(customerList);

    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();

}

function btnAddStudent() {

    let checkId = document.getElementById("txtId").value.trim();

    if(checkId === ""){
        alert("No Values Entered");

    }else if(studentList.some(student => student.id === checkId)) {
        alert("Student ID Already Exists");

    }else{

        let student = {
            id: checkId,
            name: document.getElementById("txtName").value,
            age: document.getElementById("txtAge").value,
            address: document.getElementById("txtAddress").value
        };

        studentList.push(student);

        localStorage.setItem("studentList", JSON.stringify(studentList));

        alert("Student Added Successfully...");
    }
}

function btnSearchCustomer(){
    
    let id = document.getElementById("txtId").value;

    let customer = customerList.find(c => c.id===id);

    if(customer){
        document.getElementById("txtName").value=customer.name;
        document.getElementById("txtAge").value=customer.age;
        document.getElementById("txtAddress").value=customer.address;
    }else{
        alert("Customer Not Found");
    }
}

function btnDeleteCustomer(){
    let id = document.getElementById("txtId").value ;

    let index = customerList.findIndex(c => c.id === id);

    if( index !== -1){
        customerList.splice(index, 1);
        localStorage.setItem("customerList", JSON.stringify(customerList));
        btnLoadTableOnAction();
    }else{
        alert("customer Not Found");
    }
}

function btnLoadTableOnAction(){
    // alert("load table");

    let tblbdy = "";

    customerList.forEach(customer => {
        tblbdy += `
            <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
        </tr>
        `;
    });

    document.getElementById("tableDetail").innerHTML = tblbdy;
}


