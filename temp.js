
  
  const addField = function (fieldID) {
    $('form').append(`<div>${"<input id=" + fieldID + ">"}</div>`);
    // $('form').append(`<div>${"<input id='input1'>"}</div>`);
  }
  
  const resetFields = function () {
    $('form').empty();
    $('form').append(`<div>${"<input id='input'><a href='#' onclick='' id='button'></a>"}</div>`);
  }
  
  const printEmployee = function (i) {
    employees.append(`<div>${"Name: " + employeeList[i].name + " / Office: " + employeeList[i].officeNum + " / Phone: " + employeeList[i].phoneNum}</div>`);
    // render("Name: " + employeeList[i].name + " / Office: " + employeeList[i].officeNum + " / Phone: " + employeeList[i].phoneNum);
  }
  
    
  const findEmployee = function (startIndex, employeeName) {
    for (i = startIndex; i < employeeList.length; i++) {
      if (employeeList[i].name.toLowerCase().includes(employeeName.toLowerCase())) {
        return i;
      }
    }
    return -1;
  }
  
   //Clear the display area
   $('#print').on('click',function(){
    employees.empty();
    employeeList.forEach( e => {
        render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone: " + e.phoneNum);
        // render(e.name, e.officeNum, e.phoneNum);
    });
  }); 
  
  $('#verify').on('click', function(e){
    e.preventDefault();
    console.log('runn');
    employees.empty();
   //$('#content').append('<input id="verifyInput" type="text" placeholder="Verify employee">');
  // add button with id
  //add an event listener to button id
  // When button is clicked get value from input box
  //by getting id of input $(id).val();
  
  });

  const verify = function () {
    const employeeName = document.getElementById("input").value;
    const index = findEmployee(0, employeeName);
    if (index > -1) {
      employees.append("Employee Found");
    } else { employees.append("Employee NOT Found"); }
    return true;
  }
  
  const lookup = function () {
    employees.empty();
    let index = 0;
    const employeeName = document.getElementById("input").value;
    // const employeeName = prompt('enter employee name');
    index = findEmployee(0, employeeName);
    if (index > -1) {
      printEmployee(index);
    } else { employees.append("Employee NOT Found"); }
    return true;
  }
  
  const contains = function () {
    employees.empty();
    let index = 0;
    const toFind = document.getElementById("input").value;
    // const toFind = prompt('enter partial employee name');
    while (index > -1) {
      index = findEmployee(index, toFind);
      printEmployee(index);
      index++;
    }
    return true;
  }
  
  const update = function () {
    employees.empty();
    const employeeName = document.getElementById("input").value;
    // const employeeName = prompt('enter employee name');
    const field = document.getElementById("command").value;
    // const field = prompt('enter field to update (name, office, phone)');
    const newValue = document.getElementById("input2").value;
    // const newValue = prompt('enter new value for ' + field);
    index = findEmployee(0, employeeName);
    if (field === "name") {
      employeeList[index].name = newValue;
    } else if (field === "office") {
      employeeList[index].officeNum = newValue;
    } else if (field === "phone") {
      employeeList[index].phoneNum = newValue;
    } else {
      employees.append("Invalid Command");
    }
    printEmployee(index);
    return true;
  }
  
  const addEmployee = function () {
    employees.empty();
    const name = document.getElementById("input").value;
    // const name = prompt('enter employee name');
    const officeNum = document.getElementById("input2").value;
    // const officeNum = prompt('enter office number');
    const phoneNum = document.getElementById("input3").value;
    // const phoneNum = prompt('enter telephone number');
    employeeList.push({ name, officeNum, phoneNum });
    printList();
    return true;
  }
  
  const deleteEmployee = function () {
    employees.empty();
    const employeeName = document.getElementById("input").value;
    // const employeeName = prompt('enter employee name');
    if (index > -1) {
      employeeList.splice(index, 1);
      printList();
    } else { employees.append("Employee NOT Found"); }
    return true;
  }
  
  const phoneLookup = function () {
    employees.empty();
  
    // $('#lookup').on('click', showInput());
    // $('#button').val('Lookup');
  
    const employeeName = document.getElementById("input").value;
    // const employeeName = prompt('which employee');
    const index = findEmployee(0, employeeName);
    if (index > -1) {
      employees.append("Phone #: " + employeeList[index].phoneNum);
    } else { employees.append("Employee NOT Found"); }
  
    return true;
  }
  
  const interpret = function (command) {
    switch (command) {
      case "print":
        employees.empty();
        printList();
        break;
      case "verify":
        employees.empty();
        resetFields();
        $('#verify').on('click', showInput());
        $('#button').text('Verify');
        $('#button').on('click', verify);
        break;
      case "lookup":
        employees.empty();
        resetFields();
        $('#lookup').on('click', showInput());
        $('#button').text('Lookup');
        $('#button').on('click', lookup);
        break;
      case "update":
        employees.empty();
        resetFields();
        addField("command");
        addField("input2");
        $('#update').on('click', showInput());
        $('#button').text('Update');
        $('#button').on('click', update);
        break;
      case "contains":
        employees.empty();
        resetFields();
        $('#update').on('click', showInput());
        $('#button').text('Contains');
        $('#button').on('click', contains);
        break;
      case "add":
        employees.empty();
        resetFields();
        addField("input2");
        addField("input3");
        $('#update').on('click', showInput());
        $('#button').text('Add');
        $('#button').on('click', addEmployee);
        break;
      case "delete":
      employees.empty();
      resetFields();
      $('#update').on('click', showInput());
      $('#button').text('Delete');
      $('#button').on('click', deleteEmployee);
      break;
      case "phone":
      employees.empty();
      resetFields();
      $('#update').on('click', showInput());
      $('#button').text('Lookup');
      $('#button').on('click', phoneLookup);
    }
  }
  
  // const verifyCommand = function () {
  //   employees.empty();
  //   $('#verify').on('click', showInput());
  //   $('#button').text('Verify');
  //   $('#button').on('click', verify);
  //   return true;
  // }
  
  // const lookupCommand = function () {
  //   employees.empty();
  //   $('#lookup').on('click', showInput());
  //   $('#button').text('Lookup');
  //   $('#button').on('click', lookup);
  //   return true;
  // }
  
  // const updateCommand = function () {
  //   employees.empty();
  //   $('#update').on('click', showInput());
  //   $('#button').text('Update');
  //   $('#button').on('click', update);
  //   return true;
  // }
  
  // const containsCommand = function () {
  //   employees.empty();
  //   $('#update').on('click', showInput());
  //   $('#button').text('Contains');
  //   $('#button').on('click', contains);
  //   return true;
  // }
  
  // const addCommand = function () {
  //   employees.empty();
  //   $('#update').on('click', showInput());
  //   $('#button').text('Add');
  //   $('#button').on('click', addEmployee);
  //   return true;
  // }
  
  // const deleteCommand = function () {
  //   employees.empty();
  //   $('#update').on('click', showInput());
  //   $('#button').text('Delete');
  //   $('#button').on('click', deleteEmployee);
  //   return true;
  // }
  
  // const phoneCommand = function () {
  //   employees.empty();
  //   $('#update').on('click', showInput());
  //   $('#button').text('Lookup');
  //   $('#button').on('click', phoneLookup);
  //   return true;
  // }
  
  const runCommand = function (e) {
    e.preventDefault();
    switch (command) {
      case 'print':
        let htmlStr = '';
        for (let i = 0; i < employeeList.length; i++) {
          htmlStr += `<p> ${employeeList[i].name}</p>`;
          htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        }
        render(htmlStr);
        break;
      case 'verify':
        render('verify');
        let userName = $('input').val();
        render(employeeList.some(e => e.name.toLowerCase() === userName.toLowerCase()) ? 'yes' : 'no');
        break;
    }
  }
  
  // const verify = function () {
  //   command = 'verify'
  //   $('input').addClass('show');
  // }
  
  // const print = function () {
  //   command = 'print';
  //   $('input').removeClass('show');
  // }
  
  // const render = function(html) {
  //   $('#list').html(htmlStr);
  // }
  
  $('#submit').on('click', runCommand);
  // $('#print').on('click', print);
  
  // const command = prompt("enter command");
  // if (command === "print") {
  //   printList();
  // } else if (command === "Verify") {
  //   verify();
  // } else if (command === "Lookup") {
  //   lookup();
  // } else if (command === "Contains") {
  //   contains();
  // } else if (command === "Update") {
  //   update();
  // } else if (command === "Add") {
  //   addEmployee();
  // } else if (command === "Delete") {
  //   deleteEmployee();
  // } else if (command === "Phone") {
  //   phoneLookup();
  // } else (render("Invalid Command"));



  // employeeList.some(employee => employee.name.toLowerCase() === $('#input').val('input').toLowerCase() ? htmlStr = '<div class="print"><p>Employee Found</p></div>' : htmlStr = '<div class="print"><p>Employee NOT Found</p></div>');


  htmlStr += `<p class="print">${e.name} </p>`
          htmlStr += `<p> ${e.officeNum} </p>`;
          htmlStr += `<p> ${e.phoneNum} </p>`;