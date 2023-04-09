"use strict";

class Word {
    name;
    language;
    lettres;
    constructor (name, letters, language) {
        this.name = name;
        this.nbletters =letters;
        this.language = language;
    }

    
    generateRow()
    {
        let section = document.createElement("section");
        let i = 0;
        while (i < this.letters.length) {
            section.appendChild(this.letters[i].generateGrid());
            i++;
        }
        return section;
    }
    

}

