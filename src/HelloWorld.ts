'use strict';

interface Person {
    firstname: string,
    middleinitial?: string,
    lastname: string,
    soundoff?(): string
}

enum Language {
    angularjs,
    python,
    javascript,
    csharp,
    cplusplus,
    c,
    java,
    typescript,
    spanish,
    english
}

// Get the string representation of any enum value, should it exist.
var enumToString = (val: any, en: any) => en[val];

class Developer implements Person {    
    firstname: string;
    middleinitial: string;
    lastname: string;
    
    fullname: string;
    languages: Language[];
    private lol: string;
    static ffs(): string {
        return 'oh ffs!';
    }
    
    private languagesStr(): string[] {
        var result: string[] = [];
        this.languages.forEach(l => {
            result.push(enumToString(l, Language));
        });
        return result;
    }
    
    soundoff(): string {        
        return 'I\'m ' + this.fullname + ', and I speak ' + this.languagesStr().join(', ');
    }    
    
    constructor(public p: Person, public l: Language[])  {
        this.firstname = p.firstname;
        this.middleinitial = p.middleinitial;
        this.lastname = p.lastname;
        this.languages = l;
        
        this.fullname = this.firstname;        
        if (this.middleinitial) this.fullname += ' ' + this.middleinitial + '.'; 
        this.fullname += ' ' + this.lastname;
        this.lol = 'rofl';  
    }   
}

var user = new Developer({
        firstname: 'Edwin', lastname: 'Sheldon'
    }, [
        Language.angularjs, 
        Language.python, 
        Language.javascript,
        Language.csharp,
        Language.spanish
    ]);

var f1 = (i: number) => i*i;

document.body.innerHTML = user.soundoff() + '<br />' + f1(6) + '<br />' + Developer.ffs();