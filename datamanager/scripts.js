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
        this.#updateCallBack = () => {}

        
    }
    /**
     * 
     * @param {updateCallback} updateCallback 
     */
    setupdatecallback(updateCallback) {
        this.#updateCallBack = updateCallback
        this.#updateCallBack(this.#array)
    
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
          
    }
    this.#updateCallBack(result)
    }

    
}


class Datatable 
{
    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        dataManager.setupdatecallback(person  => {
            tbody.innerHTML = ""
      
            for(const element of person) {
                const tr = document.createElement('tr')

                const tdnev = document.createElement('td')
                tdnev.innerHTML = element.nev
                tr.appendChild(tdnev)

                const tdkor = document.createElement('td')
                tdkor.innerHTML = element.eletkor             
                tr.appendChild(tdkor)

                tbody.appendChild(tr)
            }
            
        })
      
    
    }

}

const pelda1 = new DataManager([{nev:"Feri", eletkor: 17}, {nev:"Feri", eletkor: 18}, {nev:"Gábor", eletkor: 17}])

const table = new Datatable(pelda1)