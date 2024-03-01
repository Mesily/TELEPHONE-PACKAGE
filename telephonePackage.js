class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }
    addPhoneNumber(phoneNum) {
        this.phoneNumbers.push(phoneNum);
    }
    removePhoneNumber(index) {
        let phoneNumIndex = this.phoneNumbers.indexOf[phoneNum];
        if (phoneNumIndex !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }
    dialPhoneNumber(phoneNum) {
        if (this.phoneNumbers.includes(phoneNum)) {
            this.notifyObservers(phoneNum);
            console.log("Dialing " + phoneNum);
        }
        else {
            console.log("Phone number does not exist");
        }
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        let indexOfObserver = this.observers.indexOf(observer);
        if (indexOfObserver !== -1) {
            this.observers.splice(index, 1)
        }
    }
    notifyObservers(phoneNum){
this.observers.forEach(observer =>{
    observer.update(phoneNum);
});
    }
    
}

class Observer{
    update(phoneNum){

    }
}
class Observer1 extends Observer{
    update(phoneNum){
        console.log(phoneNum);
    }
}
class Observer2 extends Observer{
    update(phoneNum){
        console.log("Now Dialing " + phoneNum);
    }
}
let telephone = new Telephone;
let mercy = new Observer1;
let ani = new Observer2;

telephone.addObserver(mercy);
telephone.addObserver(ani);
telephone.addPhoneNumber("081464203955");
telephone.dialPhoneNumber("081464203955");





