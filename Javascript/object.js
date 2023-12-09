let car = {
    brand: 'Toyota',
    color: ['blue', 'black', 'white'],
    year: 2023,
    productof: 'US',
    doors: 4,
    cost : '10000$',
    client : {
        name: 'Atefa',
        age : 20,
        lisense: 'yes'
    }
    }
function showCar() {
    console.log(car.brand);
    document.write(car.brand + '<br>');
    return
}
showCar();
function Showdoors(){
    console.log(car.doors);
    document.write(car.doors + '<br>')
    return
}
Showdoors();
function identifyClient(){
    console.log(car.client.name)
    document.write(car.client.name)
    return
}
identifyClient();