'use strict';

interface Person {
    firstname: string,
    middleinitial?: string,
    lastname: string,
    soundoff?(): string
}

enum Language {
    AngularJS,
    Python,
    JavaScript,
    CSharp,
    CPlusPlus,
    C,
    Java,
    TypeScript,
    Spanish,
    English
}

enum Editor {
    vi,
    vim,
    ed,
    emacs,
    nano,
    pico,
    Sublime,
    Atom,
    Brackets,
    Code,
    Notepad,
    gedit,
    NotepadPlusPlus,
    VisualStudio,
    PyCharm,
    WebStorm
}

enum OS {
    Linux,
    Unix,
    BSD,
    Windows,
    OSX,
    Android,
    iOS,
    WindowsPhone
}

/** Get the string representation of any enum value, should it exist. */
function enumToString<T> (val: number, en: T) { return en[val]; }
function enumsToString<T> (vals: number[], en: T) {
    var result: string[] = [];
    vals.forEach(v => {
        result.push(enumToString(v, en));
    });
    return result;    
}

/** Oxford comma string from a collection */
function oxford<T>(coll: T[]): string {
    var txt = coll.join(', ');
    var i = txt.lastIndexOf(', ');
    return txt.slice(0, i) + txt.slice(i).replace(', ', ', and ');     
}

class Developer implements Person {    
    firstname: string;
    middleinitial: string;
    lastname: string;
    
    fullname: string;
    languages: Language[];
    editors: Editor[];
    operatingsystems: OS[];
    
    soundoff(): string {      
        var txt = 'I\'m ' + this.fullname + ', and I speak '
            + oxford(enumsToString(this.languages, Language)) + '.<br />'
            + 'My favorite editors are ' + oxford(enumsToString(this.editors, Editor)) + '.';
        if (this.operatingsystems) 
            txt += '<br />I develop for ' + oxford(enumsToString(this.operatingsystems, OS)) + '.';
        return txt;
    }    
    
    constructor(public p: Person, public l: Language[], public e: Editor[],
            public o?: OS[])  {
        this.firstname = p.firstname;
        this.middleinitial = p.middleinitial;
        this.lastname = p.lastname;
        this.languages = l;
        this.editors = e;
        this.operatingsystems = o;        
        
        this.fullname = this.firstname;        
        if (this.middleinitial) this.fullname += ' ' + this.middleinitial + '.'; 
        this.fullname += ' ' + this.lastname;
    }   
}

var user = new Developer({
        firstname: 'Edwin', lastname: 'Sheldon'
    }, [
        Language.AngularJS, 
        Language.Python, 
        Language.JavaScript,
        Language.CSharp,
        Language.Spanish
    ], [
        Editor.Code, Editor.vim, Editor.VisualStudio, Editor.PyCharm
    ], [
        OS.Linux, OS.Unix, OS.BSD, OS.Windows
    ]);

document.body.innerHTML = user.soundoff();