document.getElementById("formRegistro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const matricula = document.getElementById("matricula").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const carrera = document.getElementById("carrera").value;
    const semestre = document.getElementById("semestre").value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    const estudiante = {
        nombre,
        apellido,
        matricula,
        correo,
        telefono,
        carrera,
        semestre,
        sexo
    };

    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.push(estudiante);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    alert("¡Registro exitoso!");
    document.getElementById("formRegistro").reset();
});
