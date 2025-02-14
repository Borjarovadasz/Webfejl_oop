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
 */

class DetailsArea extends Area{
    constructor(className) {
        super(className);
    }
}

/**
 * EZ FOGJA TARTALMAZNI a diákok listáját
 * @param {string} className

 */
class StudentArea extends Area{

}