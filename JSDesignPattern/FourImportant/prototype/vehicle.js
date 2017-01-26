console.log("Prototype design pattern: \n");

var vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel;
    },
    getModel: function () {
        console.log('The model of this vehicle is..' + this.model);
    }
};

var car = Object.create(vehiclePrototype);
car.init("Ford Escort");
car.getModel();

var anotherCar = Object.create(car, {
    'id': {
        value: 1,
        enumerable: true // writable:false, configurable:false by default
    },
    'model': {
        value: 'Ford xxx',
        enumerable: true
    }
});

console.log(anotherCar.id);
anotherCar.getModel();