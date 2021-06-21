// validacion del search form el min 3 characters si no comple da un error con is-invalid
const searForm = document.getElementById("searchForm");

function validate_search() {
  if (searchId.value.length <= 3) {
    searchId.classList.add("is-invalid");
    document.getElementById("errorEmail1").textContent =
      "You must write more than 3 characters";
  }
}

// validacion del form, emil, password y password repet con 8 min characters y mayuscula y miniscula
const form = document.getElementById("myFormId");

function registerValidate() {
  var acumErrores = 0;

  form.classList.remove("is-invalid");

  var inputEmail = document.getElementById("inputEmail");

  var inputPassword1 = document.forms["myForm"]["inputPassword1"];
  var inputPassword2 = document.forms["myForm"]["inputPassword2"];

  var inputProvince = document.forms["myForm"]["inputProvince"];

  /*var inputPassword = document.getElementById('inputPassword');*/
  /*var inputEmail = document.forms["myForm"]["inputEmail"];*/

  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  }

  if (inputPassword1.value == "") {
    inputPassword1.classList.add("is-invalid");
    document.getElementById("errorPassword1").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_Password(inputPassword1.value)) {
    inputPassword1.classList.add("is-invalid");
    document.getElementById("errorPassword1").textContent =
      "los caracteres míni son 8 y debe contener mayúscula y miniscula";
    acumErrores++;
  }

  if (inputPassword2.value == "") {
    inputPassword2.classList.add("is-invalid");
    document.getElementById("errorPassword2").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (inputPassword1.value !== inputPassword2.value) {
    inputPassword2.classList.add("is-invalid");
    document.getElementById("errorPassword2").textContent =
      "Repite la misma contraseña";
    acumErrores++;
  }

  if (inputProvince.value == "") {
    inputProvince.classList.add("is-invalid");
    document.getElementById("errorProvince").textContent =
      "La provincia es obligatoria";
    acumErrores++;
  }

  if (!gridCheck.checked) {
    gridCheck.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent = "Acepta las bases";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    //registerValidate();
  },
  true
);

// function para validar el password min characters y majuscula y minuscula
function validar_Password(pass) {
  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return reg.test(pass) ? true : false;
}

// function para validar el email
function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}
