/**
 * @callback AddcCallback
 * @param {Student} student a hozzáadot diák
 * 
 * @callback SelectCallBack
 * @param {Student} student a kiválaszott diak
 */




class Manager {
    /**
     * @type {Student[]}
     */
    
    #array;
    /**
     * @type {SelectCallBack} kiválasztás esetén futattnánk
     */

    #selectcallback


    /**
     * @type {AddcCallback} hozzáadás esetén futattnánk (mert undefinedok )
     */
    #addcallback;


    constructor() {
        this.#array = []
    }

    /**
     *   Beállítjuk a selectcallback értékéta callback meg tartalazza a calack implementációját
     * @param {AddcCallback} callback 
    */
    setAddcallback(callback) {
        this.#addcallback = callback
    }

    /**
     * Beállítjuk a selectcallback értékéta callback meg tartalazza a calack implementációját
     * @param {SelectCallBack} callback 
     */
    setSelectcallback(callback) {
        this.#selectcallback = callback;
    }

    /**
     * hozzadott diak
     * @param {Student} student 
     */
    addStudent(student) {
        this.#array.push(student)
        this.#addcallback(student)

        /**
         * @param {Student} student a kivalasztot diak
         */

      

    
    }

    select(student) {
        this.#selectcallback(student)
    }
}
