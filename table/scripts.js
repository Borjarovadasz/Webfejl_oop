const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person {
    constructor(obj) {
        this.firstname1 = obj.firstname1,
        this.firstname2 = obj.firstname2,
        this.lastname = obj.lastname
    }
        
    render(parentelement) {
        const row = document.createElement('tr') // sor létrehozá

        const firstn1 = document.createElement('td') //cella létrehozása
        firstn1.innerHTML = this.firstname1

        const firstn2 = document.createElement('td') //cella létrehozása
        firstn2.innerHTML = this.firstname2

        const lastname1 = document.createElement('td') //cella létrehozása
        lastname1.innerHTML = this.lastname
        row.appendChild(lastname1)
        row.appendChild(firstn1)
       

        if(this.firstname2 == undefined)
            firstn1.colSpan = 2
        else{
            const firstn2 = document.createElement('td') //cella létrehozása
            firstn2.innerHTML = this.firstname2
            row.appendChild(firstn2)
        }
        parentelement.appendChild(row)
        
    }

}

function innit()
{
    const tbody = document.getElementById('tbodyId')
    for(const nevek of array) {
        
        const ember = new Person(nevek)

        ember.render(tbody);
    }
}

innit()