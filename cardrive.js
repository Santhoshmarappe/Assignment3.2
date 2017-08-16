//Class for implementing the interface
var Car = (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        return 'Start Driving the Car... ';
    };
    Car.prototype.drive = function () {
        return 'Drive slowly and put a break now... ';
    };
    Car.prototype.getPosition = function () {
        return 'Get the correct position...';
    };
    return Car;
}());
var Vehicle = new Car();
document.write(Vehicle.start());
document.write(Vehicle.drive());
document.write(Vehicle.getPosition());
//Outout:Start Driving the Car... Drive slowly and put a break now... Get the correct position... 
