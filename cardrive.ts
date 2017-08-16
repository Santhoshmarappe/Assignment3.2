
//interface for something that can drive.
interface Drivable{
    start();
    drive();
    getPosition();
}
//Class for implementing the interface
class Car implements Drivable{

    start(){
       return 'Start Driving the Car... ';
    }

    drive() {
        return 'Drive slowly and put a break now... ';
    }

    getPosition () {
        return 'Get the correct position...';
    }
}
var Vehicle = new Car();
document.write(Vehicle.start());
document.write(Vehicle.drive());
document.write(Vehicle.getPosition());

//Outout:Start Driving the Car... Drive slowly and put a break now... Get the correct position...