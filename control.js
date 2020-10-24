var btn = document.getElementById('btn');
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var regext = /^[^@]+@[^@]/

//+\.[a-zA-Z]{2,}$
btn.addEventListener('click', function (e) {

    if (!regext.test(user.value)) {

        alert('El usuario debe contener un @')
        e.preventDefault();
        return false;

    } else if (user.value === '') {

        alert('El usuario es obligatorio')
        e.preventDefault();
        return false;

    } else if (pass.value === '') {
        alert('La contraseña es obligatoria')
        e.preventDefault();
        return false;
    }
});