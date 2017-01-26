class Subject {
    constructor(subjectId) {
        this._subject = document.getElementById(subjectId)
        this._observers = []
        this._subject.onkeypress = (e) => {
            setTimeout(() => {
                console.log(e.target.value)
                this.notify(e.target.value)
            }, 100)
        }
    }

    subscribe(observer) {
        this._observers.push(observer)
    }

    unsubscribe(observer) {
        const index = this._observers.findIndex(x => x.id == observer.id)
        if (index >= 0) {
            this._observers.splice(index, 1)
        }
    }

    notify(newValue) {
        this._observers.forEach(o => o.update(newValue))
    }
}

class Observer {
    constructor(id) {
        this._id = id
        this._observer = document.getElementById(id)
        this._observer.innerHTML = id
    }

    get id() {
        return this._id
    }

    update(newValue) {
        this._observer.innerHTML = newValue
    }
}

let subject = new Subject('txtSubject')
let observer1 = new Observer('lblObserver1')
let observer2 = new Observer('lblObserver2')

subject.subscribe(observer1)
subject.subscribe(observer2)
//subject.unsubscribe(observer1)
