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

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID: ${ id }`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró el salario para el empleado ${ empleado.nombre }`);
    } else {
        return { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id };
    }
}

getEmpleado(5).then( empleado => {
    return getSalario(empleado);
})
.then( resp => {
    console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
})
.catch( err => {
    console.log(err);  
} );