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

let getEmpleado = (id) =>
    new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);    
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID: ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });

let getSalario = (empleado) =>
    new Promise( (resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado: ${ empleado.nombre }`)
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });

getEmpleado(4).then(empleado => {
    console.log('Empleado de BD:', empleado);

    getSalario(empleado).then( resp => {
        console.log(`El salario de ${ resp.nombre } es de S/. ${ resp.salario }`);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});
