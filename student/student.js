/**
 * A student entitásokat keei amikor hozzáadjubk vagy szelektálubk egy studentotn
 */

class Student{
    /**
     *  @type {Number}
     */
    #average;

    /**
     *  @type {string} 
     */
    #name;


    /**
     *  @type {string}
     */
    
    #comment;

    /**
     *  @type {boolean}
     */

    #bad;
    /**
     * @type {Number} visszatér az átlaggal 
     */
    get average() {
        return this.#average
    }
    /**
     * @type {string} visszatér a diákrol alkotottvéleménye
     */
    get comment() {
        return this.#comment
    }

    /**
     * @returns {boolean} igazal tér vissza ha a dik lebukok
     */
    get bad() {
        return this.#bad
    }

    /**
     * @returns {string} a diák neve
     */
    get name() {
        return this.#name
    }

    /**
     * 
     * @param {string} name //diak neve
     * @param {number} average diak átlag
     * @param {string} comment diak vélemény
     * @param {boolean?} bad  diak viselgedes
     */
    constructor(name,average,comment,bad) {
        this.#average = average
        this.#name = name
        this.#comment = comment
        this.#bad = bad
       
    }
}