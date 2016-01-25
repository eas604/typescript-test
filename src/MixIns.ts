'use strict';

class Disposable {
    isDisposed: boolean;
    dispose() { this.isDisposed = true; }
}

class Activatable {
    isActive: boolean;
    activate() { this.isActive = true; }
    deactivate() { this.isActive = false; }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    }); 
}

class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => console.log(this.isActive, this.isDisposed), 500)
    }
    
    interact() { this.activate(); }
    
    isDisposed: boolean = false;
    dispose: () => void;
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable])

var smartObj = new SmartObject();
setTimeout(() => smartObj.activate(), 2000);
setTimeout(() => smartObj.deactivate(), 3000);
setTimeout(() => smartObj.dispose(), 4500);