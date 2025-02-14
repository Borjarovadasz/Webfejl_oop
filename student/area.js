class Area {
    /**
     * @type {HTMLDIvEleent}
     */
    #div

    /**
     * @returns {HTMLDIvEleent} v
     */
    get div() {
        return this.#div
    }
    /**
     * 
     * @param {string} classname a css osztályát tartalmaza az adott területen 
     */

    constructor(classname) {
        const container = this.#getContainer();
        this.#div = document.createElement('div')
        this.#div.className = classname;
        container.appendChild(this.#div)
    }

    /**
     * 
     * A container classal rendeező elemben tesszük bele az alkalmazás egyes részeit
     *  els körbe megnézzuk hgy letezik e a container osztallyal rendelkezo div
     * hanem letezik letrehozunk egyet
     * 
     * @returns {HTMLDIvEleent} 
     */
    #getContainer()  {
        let container = document.querySelector('.container'); //lekérjük a container classal rendekező eleet

        if(!container) { //ha nem létezk
            container = document.createElement('div') // létrehozzu
            container.className = 'container' //class beállítása containerrel mert ujra meghiávs esetnén
            document.body.appendChild(container) //hozzátersszük a bodyoz a 90 nőt
        }
        return container;
     }
     
}
/**
 * létehoz ey details terüleeta megadott css osztályal
 * @param {string} className
 * @param {string} manager
 */

class DetailsArea extends Area{
    constructor(className, manager) {
        super(className);
        manager.setSelectcallback((student) => {
            this.div.innerHTML = ""
            const detailscontainer = document.createElement('div')
            detailscontainer.innerHTML = student.comment
            this.div.appendChild(detailscontainer);
        })
    }
}

/**
 * EZ FOGJA TARTALMAZNI a diákok listáját
 * @param {string} className
 * @param {string} manager
*/
class StudentArea extends Area{
    constructor(className, manager) {
        super(className);
        manager.setAddcallback((student) =>  {
            const studentcard = document.createElement('div')
            studentcard.className = 'student-card'
            const namepsan = document.createElement('span')
            namepsan.textContent = student.name;
            namepsan.style.color = student.bad ? 'red': 'black';
            studentcard.appendChild(namepsan);
            studentcard.appendChild(document.createElement('br'));

            const averagespan = document.createElement('span')
            averagespan.textContent = student.average;
            studentcard.appendChild(averagespan);
            this.div.appendChild(studentcard)
            studentcard.addEventListener('click', (e) => {
                
                const cardlist = document.querySelectorAll('.student-card') //végigiterálnuk a student cardokon
                for(const card of cardlist) {
                    card.className = 'student-card'

                    //mivel a selectednél a studet card mellet lesz egy seleced css class ezéert ha az összesnek megadjuk
                    //az eredeti clas, a selectedes torlid
                }
                e.currentTarget.classList.add('selected')
                manager.select(student)
                
            })

        })
    }
}