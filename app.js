const state = {
  employeeList: [
    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '222-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ]
};

//Functions that iterate through the arrays
const findEmployee = function (startIndex, employeeName) {
  for (i = startIndex; i < state.employeeList.length; i++) {
    if (state.employeeList[i].name.toLowerCase().includes(employeeName.toLowerCase())) {
      return i;
    }
  }
  return -1;
}

const lookup = function () {
  outputDiv.empty();
  let index = 0;
  const employeeName = document.getElementById("input").value;
  index = findEmployee(0, employeeName);
  if (index > -1) {
    outputDiv.append(`<p>${employeeList[index].name}</p><p>${employeeList[index].officeNum}</p>`)
  } else { outputDiv.append("Employee NOT Found"); }
}

const contains = function () {
  outputDiv.empty();
  let index = 0;
  const toFind = document.getElementById("input").value;
  while (index > -1) {
    index = findEmployee(index, toFind);
    printEmployee(index);
    index++;
  }
}

const update = function () {
  outputDiv.empty();
  const employeeName = document.getElementById("input").value;
  const field = document.getElementById("command").value;
  const newValue = document.getElementById("input2").value;
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
}

const add = function () {
  outputDiv.empty();
  const name = document.getElementById("input").value;
  const officeNum = document.getElementById("input2").value;
  const phoneNum = document.getElementById("input3").value;
  employeeList.push({ name, officeNum, phoneNum });
  printList();
}

const deleteEmployee = function () {
  outputDiv.empty();
  const employeeName = document.getElementById("input").value;
  if (index > -1) {
    employeeList.splice(index, 1);
    printList();
  } else { outputDiv.append("Employee NOT Found"); }
}

const phone = function () {
  outputDiv.empty();
  const employeeName = document.getElementById("input").value;
  const index = findEmployee(0, employeeName);
  if (index > -1) {
    outputDiv.append("Phone #: " + employeeList[index].phoneNum);
  } else { outputDiv.append("Employee NOT Found"); }
}

//Switch Statements
let command = '';
const outputDiv = $('#content');

const runSubmit = function (e) {
  let employeeList = state.employeeList;
  e.preventDefault();
  let htmlStr = '';
  switch (command) {
    case "print":
      outputDiv.empty();
      employeeList.forEach(e => {
        htmlStr += `<div class="space"><p>Name: ${e.name}</p>`;
        htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
        htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
      });
      render(htmlStr);
      break;
    case "verify":
      outputDiv.empty();

      index = state.employeeList.some(function (element) {
        return element.name.toLowerCase() === $('#input').val().toLowerCase();
      });

      if (index === true) {
        htmlStr = '<div class="print"><p>Employee Found</p></div>';
      } else {
        htmlStr = '<div class="print"><p>Employee NOT Found</p></div>';
      }
      
      // employeeList.some(employee => employee.name.toLowerCase() === $('#input').val('input').toLowerCase() ? htmlStr = '<div class="print"><p>Employee Found</p></div>' : htmlStr = '<div class="print"><p>Employee NOT Found</p></div>');
      render(htmlStr);
      break;
    case "lookup":
      outputDiv.empty();
      console.log('lookup');
      let match = false
      employeeList.find(employee => employee.name.toLowerCase() === $('#input').val().toLowerCase() ? match = employee : htmlStr = '<p>Employee Not Found</p>');
      if (match !== false) {
        htmlStr += `<div class="print"></> ${match.name} </p>`
        htmlStr += `<p> ${match.officeNum} </p>`;
        htmlStr += `<p> ${match.phoneNum} </p>`;
      }
      render(htmlStr);
      break;
    case "contains":
      outputDiv.empty();
      console.log('contains');
      break;
    case "update":
      outputDiv.empty();
      console.log('udpate');
      break;
    case "add":
      outputDiv.empty();
      console.log('add');
      break;
    case "delete":
      outputDiv.empty();
      console.log('delete');
      break;
    case "phone":
      outputDiv.empty();
      console.log('phone');
      break;
  }
}
//DOM functions
const hideWelcome = function () { //Works!
  $('h1').addClass('hide');
}
const move = function () { //Works!
  $('h2').addClass('move');
}
const hideInput = function () {
  $('form').removeClass('hide');
}
const showInput = function () {
  $('form').addClass('show');
}
const hidePrint = function () {
  $('.print').addClass('hide');
}
const render = function (htmlStr) {
  $('#content').html(htmlStr);
}

/*DO NOT DELETE */ //Call back Functions that power event listeners
const setPrint = function () { //Works but have to click print 2x!
  outputDiv.empty();
  hideWelcome();
  move();
  hideInput();
  showInput();
  runSubmit(event);
  command = 'print';
}
const setVerify = function () {
  outputDiv.empty();
  hideWelcome();
  move();
  hideInput();
  showInput();
  hidePrint();
  runSubmit(event);
  command = 'verify';
}
const setLookup = function () {
  outputDiv.empty();
  hideWelcome();
  move();
  hideInput();
  showInput();
  runSubmit(event);
  command = 'lookup';
}
const setContains = function () {
  outputDiv.empty();
  command = 'contains';
}
const setUpdate = function () {
  outputDiv.empty();
  command = 'update';
}
const setAdd = function () {
  outputDiv.empty();
  command = 'add';
}
const setDelete = function () {
  outputDiv.empty();
  command = 'delete';
}
const setPhone = function () {
  outputDiv.empty();
  command = 'phone';
}
//Event Listener Callback Functions
$('#print').on('click', setPrint); //Works!
$('#verify').on('click', setVerify);
$('#lookup').on('click', setLookup);
$('#contains').on('click', setContains);
$('#update').on('click', setUpdate);
$('#add').on('click', setAdd);
$('#delete').on('click', setDelete);
$('#phone').on('click', setPhone);
$('#submit').on('click', runSubmit);

//1. Add an eventlistener for lookup that runs setLookup 
//2. at the top somewhere create a function called setLookup and copy paste setVerify
//3. add the switch