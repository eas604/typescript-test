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

enum Editor {
    vi,
    vim,
    ed,
    emacs,
    nano,
    pico,
    sublime,
    atom,
    brackets,
    code,
    notepad,
    gedit,
    notepadplusplus,
    visualstudio
}

enum OS {
    linux,
    unix,
    bsd,
    windows,
    osx,
    android,
    ios,
    windowsphone
}

// Get the string representation of any enum value, should it exist.
var enumToString = (val: any, en: any) => en[val];
var enumsToString = function (vals: any[], en: any) {
    var result: string[] = [];
    vals.forEach(v => {
        result.push(enumToString(v, en));
    });
    return result;    
}

class Developer implements Person {    
    firstname: string;
    middleinitial: string;
    lastname: string;
    
    fullname: string;
    languages: Language[];
    editors: Editor[];
    operatingsystems: OS[];
    
    private lol: string;
    static ffs(): string {
        return 'oh ffs!';
    }
    
    soundoff(): string {      
        var txt = 'I\'m ' + this.fullname + ', and I speak '
            + enumsToString(this.languages, Language).join(', ') + '.<br />'
            + 'My favorite editors are ' + enumsToString(this.editors, Editor).join(', ') + '.';
        if (this.operatingsystems) 
            txt += '<br />I develop for ' + enumsToString(this.operatingsystems, OS).join(', ') + '.';
        return txt;
    }    
    
    constructor(public p: Person, public l: Language[], public e: Editor[],
            public o?: OS[])  {
        this.firstname = p.firstname;
        this.middleinitial = p.middleinitial;
        this.lastname = p.lastname;
        this.languages = l;
        
        this.fullname = this.firstname;        
        if (this.middleinitial) this.fullname += ' ' + this.middleinitial + '.'; 
        this.fullname += ' ' + this.lastname;
        this.lol = 'rofl';  
        
        this.editors = e;
        this.operatingsystems = o;
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
    ], [
        Editor.code, Editor.vim, Editor.visualstudio
    ], [
        OS.linux, OS.unix, OS.bsd, OS.windows
    ]);

var f1 = (i: number) => i*i;

document.body.innerHTML = user.soundoff() + '<br />' + f1(6) + '<br />' + Developer.ffs();