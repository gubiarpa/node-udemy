/* Async Await */
let getNombre = async () => {
    undefined.nombre;
    return 'gubiarpa';
};
// console.log(getNombre());
getNombre().then(nombre => {
    console.log(nombre);
})
.catch(e => {
    console.log('Error de Async:', e);
    console.log('Fin del error');
});