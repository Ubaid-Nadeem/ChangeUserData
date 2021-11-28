var a = JSON.parse(localStorage.getItem('Users')) || []
console.log(a)

var Email = document.getElementById('email');
var Password = document.getElementById('password');
var Name = document.getElementById('name')
var userbox = document.getElementById('userbox');
adduserdetails()

var table = document.getElementById('table');

function adddata() {
  a.forEach(function (value, index) {
    // console.log(value)
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var tdname = document.createElement('td');
    var tdemail = document.createElement('td');
    var tdpassword = document.createElement('td');
    var tddelete = document.createElement('td');
    var tdchnage = document.createElement('td');

    tddelete.innerHTML = 'Delete'
    tddelete.style.backgroundColor = '#E21717'
    tddelete.style.color = '#fff'
    tddelete.style.cursor = 'pointer'
    tddelete.addEventListener('click', function () {
      deletedata()
    })

    tdchnage.innerHTML = 'Change'
    tdchnage.style.backgroundColor = '#2827CC'
    tdchnage.style.color = '#fff'
    tdchnage.style.cursor = 'pointer'

    tdchnage.addEventListener('click', function () {
      changedata()
    })


    tdname.style.fontWeight = 'bold'
    tdname.innerHTML = value.name
    tdemail.innerHTML = value.email
    tdpassword.innerHTML = value.password
    tr.appendChild(tdname);
    tr.appendChild(tdemail)
    tr.appendChild(tdpassword)
    tr.appendChild(tddelete)
    tr.appendChild(tdchnage)


    function deletedata() {
      table.removeChild(tr)
      console.log(index)
      a.splice(index, 1)
      console.log(a)
      localStorage.setItem('Users', JSON.stringify(a))
      // localStorage.removeItem('Users')
    }


    function changedata() {
      var loginbox = document.getElementById('login_box');
      loginbox.style.display = 'none'
      var userdata = document.getElementById('userdata');
      userdata.style.display = 'none'
      var changeing_details = document.getElementById('changeing_details');
      changeing_details.style.display = 'block'
      // console.log(index)
      console.log(index)

      function savechan() {
        var changename = document.getElementById('changename');
        var changeemail = document.getElementById('changeemail');
        var changepas = document.getElementById('changepas');
        console.log(changename.value, changeemail.value, changepas.value)

        a[index].name = changename.value;
        a[index].email = changeemail.value;
        a[index].password = changepas.value;
        console.log(index);
        localStorage.setItem('Users', JSON.stringify(a))
        location.reload()

      }

      var savechange = document.getElementById('savechange');
      savechange.addEventListener('click', function () {
        savechan()

      })


    }



  });




}

adddata()

var cancel = document.getElementById('cancel')

cancel.addEventListener('click', function () {
  var loginbox = document.getElementById('login_box');
  loginbox.style.display = 'inline-block'
  var userdata = document.getElementById('userdata');
  userdata.style.display = 'inline-block'
  var changeing_details = document.getElementById('changeing_details');
  changeing_details.style.display = 'none'

})

function signup() {
  var user = {
    name: Name.value,
    email: Email.value,
    password: Password.value
  }
  a.unshift(user)
  localStorage.setItem('Users', JSON.stringify(a))


  Email.value = '';
  Password.value = '';
  Name.value = '';

  console.log(a)

  alert('Your Account has beec created')

  location.reload()


}

function login() {
  var b = JSON.parse(localStorage.getItem('Users')) || alert('Please enter your id')
  console.log(b)
  if (b.name == Name.value && b.email == Email.value) {
    if (b.password == password.value) {
      console.log(b)
      document.getElementById('login_box').style.display = 'none'
      userbox.style.display = 'block'
      document.getElementById('userName').innerHTML = Name.value
    }
    else {
      alert('Incorrect Password')
      console.log('Incorrect Password')
    }
  }
  else {
    console.log('Invalid Account')
    alert('Invalid Account');
    console.log(b)
  }
}

function adduserdetails() {
}

function show() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



