// Question: Implement Observer pattern with a problem domain of your choosing.
//Problem Domain : Notifying Student about class meeting timings
function Subject() {
    this.observers = [];

    this.registerObserver = function (observer) {
        if (this.observers.indexOf(observer) === -1) {
            this.observers.push(observer);
        }
    };

    this.unregisterObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };

    this.notifyObservers = function (message) {
        this.observers.forEach(function (observer) {
            observer.notify(message);
        });
    };
}
function Student(name) {
    this.name = name;
    this.notify = function (meetingTime) {
        console.log(
            this.name +
                ": Meeting at " +
                meetingTime +
                ". Join the Meeting on Time."
        );
    };
}

let raj = new Student("Raj Sharma");
let ravi = new Student("Ravi Oberoi");
let priya = new Student("Priya Dutta");
let shiv = new Student("Shiv Oberoi");

let meetingAlerts = new Subject();

meetingAlerts.registerObserver(raj);
meetingAlerts.registerObserver(ravi);
meetingAlerts.registerObserver(priya);
meetingAlerts.registerObserver(shiv);
meetingAlerts.notifyObservers("9AM");
