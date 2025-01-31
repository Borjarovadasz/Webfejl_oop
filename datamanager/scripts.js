/**
 * @typedef {{nev:String, eletkor:Number}} Person
 * @callback updateCallback
 * @param {Person[]} people
 * @returns {void}
 */
class DataManager
{
    /**
     *  @type {Person[]}
     */
    #array

    /**
     *  @type {updateCallback}
     */
    #updateCallBack
    /**
     * 
     * @param {Person[]} tomb 
     * 
     */
    constructor(tomb = []) {
        this.#array = tomb
        this.#updatecallback = () => {}

        
    }
    /**
     * 
     * @param {updateCallback} updateCallback 
     */
    setupdatecallback(updateCallback) {
        this.#updateCallBack = updateCallback
    
    }

    /**
     * 
     * @param {Person} ember 
     */
    add(ember) {
        this.#array.push(ember)
        this.#updateCallBack(this.#array)
    }

    /**
     * 
     * @param {String} nev 
     */
    filterName(nev) {
        const result = []
        
        for(const element of this.#array) {
            if(element.nev === nev) {
                result.push(element.nev)
            }
         
        } 
        this.
    }

    
    
    /**
     * 
     * @param {Number} kor 
     */
    filterAge(eletkor) {
        const result = []
        
        for(const element of this.#array) {
            if(element.eletkor === eletkor) {

            }
            result.push(element.eletkor)
            this.#updateCallBack(result)
    }


/**
 * @type {Person[]}
 */

#array
/**
 * @type {updateCallback}
 */
#updatecallback
}








class datatable 
{

}