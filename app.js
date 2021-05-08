    // Events : chapter 43-48
function hello(){
 
    alert("Hi Guys!!")
}

function add(){
    alert("Thanks For Purchasing")
}


function del0(){
  document.getElementById("row0").remove()
}
function del1(){
  document.getElementById("row1").remove()
}
function del2(){
  document.getElementById("row2").remove()
}
function del3(){
  document.getElementById("row3").remove()
}

function del4(){
  document.getElementById("row4").remove()
}


var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Number: " + count;
};

var button = document.getElementById("clickyou"),
  count = 0;
button.onclick = function() {
  count -= 1;
  button.innerHTML = "Number: " + count;
};

var button = document.getElementById("vip"),
  count = 0;
button.onclick = function() {
  count -= 1;
  button.innerHTML = "Decrease: " + count;
};

  // Events : chapter 49-52

  function signupForm(){

    var b=document.getElementById("email")
    var c=document.getElementById("password")

    document.getElementById("demo").innerHTML =" <h1> FORM DATA </h1> <br> Your email is " + b.value +"<br>" +" and your password is " + c.value;
}

function visible(){
    var target = document.getElementById("visible");
    target.style.visibility ="visible";
    function ancor (){
        var get = document.getElementById("anchor");
    get.style.visibility = "hidden";
    }
   ancor()
}


var a = 0;
function studentInfo() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    switch (true) {
        case (name == false):
            alert("Name is required field")
            document.getElementById("submit").disabled = false;
            document.getElementById("submit").studentForm() = false;
            break;
        case (email == false):
            alert("Email is required field")
            document.getElementById("submit").disabled = false;
            document.getElementById("submit").studentForm() = false;
            break
        case (password == false):
            alert("Password is required field ")
            document.getElementById("submit").disabled = false;
            document.getElementById("submit").studentForm() = false;
            break
    }

}
function studentForm() {
    var getitem = document.getElementById("table");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var row = getitem.insertRow(-1);
    row.insertCell(0).textContent = a++;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = email;
    row.insertCell(3).textContent = password;
    row.insertCell(4).innerHTML = "<button onclick='deletfunc()' style='padding:5px 10px;'>Delete</button>"
    row.insertCell(5).innerHTML = "<button onclick='editfunc()' style='padding:5px 20px;'>Edit</button>"

    function empty() {
        var get = document.getElementById("name");
        var get1 = document.getElementById("email");
        var get2 = document.getElementById("password");
        get.value = "";
        get1.value = "";
        get2.value = "";
    }
    empty()
}
function deletfunc() {
    var main = document.getElementById("table");
    for (var i = 0; i <= main.rows.length; i++) {
        table.rows[i].cells[3].onclick = function () {
            index = i - 1;
            table.deleteRow(index)
        }


    }

}
function editfunc() {
  
    var edit1 = prompt("Enter your Name");
    if (edit1 == "") {
        alert("Name is required field")
        editfunc() == false;
    }
    var edit2 = prompt("Enter your email address");
    if (edit2 == "") {
        alert("Email is required field")
        var edit2 = prompt("Enter your email address")
        if (edit2 == "") {
            alert("Email is required field")
            editfunc() == false;
        }
    }
    var edit3 = prompt("Creat a password");
    if (edit3 == false) {
        alert("Password is required field")
        var edit3 = prompt("Password is required field")
        if (edit3 == "") {
            alert("Password is required field")
            editfunc() == false;
        }
    }
    var table = document.getElementById("table");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[4].onclick = function () {
            table.rows[i - 1].cells[1].innerHTML = edit1;
            table.rows[i - 1].cells[2].innerHTML = edit2;
        }
    }

}

// Events : chapter 53-58

function open_img_box(){
  document.getElementById('model_gallery').style.display = 'block';
  document.getElementById('gallery').style.display = 'none';
}

var img_arr = [
  'images/one.jpg',
  'images/two.png',
  'images/three.jpg',
  'images/four.jpg',
  // 'images/five.jpg',
  // 'images/sex.jpg',
  // 'images/seven.jpg',
  // 'images/eight.jpg'
];

var img = document.getElementById('model_img');
var i = img_arr.length;
function previous_img(){
  i--;
  img.src = img_arr[i];
  if(i<0){
    i = 7;
    img.src = img_arr[i];
  }
}

function next_img(){
  i++;
  img.src = img_arr[i];
  if(i>7){
    i = 0;
    img.src = img_arr[i];
  }
}

function close_img_model(){
  document.getElementById('model_gallery').style.display = 'none';
  document.getElementById('gallery').style.display = 'block';
}