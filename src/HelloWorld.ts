interface Person {
    firstname: string,
    middleinitial?: string,
    lastname: string,
    soundoff?(): string
}

class Developer implements Person {    
    firstname: string;
    middleinitial: string;
    lastname: string;
    
    fullname: string;
    languages: string[];
    private lol: string;
    static ffs(): string {
        return 'oh ffs!';
    }
    
    constructor(public p: Person, public l: string[])  {
        this.firstname = p.firstname;
        this.middleinitial = p.middleinitial;
        this.lastname = p.lastname;
        this.languages = l;
        
        this.fullname = this.firstname;        
        if (this.middleinitial) this.fullname += ' ' + this.middleinitial + '.'; 
        this.fullname += ' ' + this.lastname;
        this.lol = 'rofl';  
    }
    
    soundoff(): string {
        return 'I\'m ' + this.fullname + ', and I speak ' + this.languages.join(', ');
    }
}

var user = new Developer({
        firstname: 'Edwin', lastname: 'Sheldon'
    }, [
        'angularjs', 'python', 'javascript', 'c#', 'spanish'
    ]);

var f1 = (i: number) => i*i;

document.body.innerHTML = user.soundoff() + '<br />' + f1(6) + '<br />' + Developer.ffs();