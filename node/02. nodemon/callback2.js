let empleados = [
    {
        id: 1,
        nombre: 'Billy'
    },
    {
        id: 2,
        nombre: 'Yeri'
    },
    {
        id: 3,
        nombre: 'Nico'
    },
    {
        id: 4,
        nombre: 'Tiana'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3,
        salario: 4000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID: ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró el salario para el empleado ${ empleado.nombre }`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario });
    }
}

getEmpleado(7, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

getSalario({ id: 1, nombre: 'Billy' }, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario);
});