/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]

const factory = new Factory();



document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
});

/**
 * table render
 */
function initTable(){
    for(let i = 0; i < companionList.length; i++) {
        const currentelement = companionList[i]
        const companion = new Companion(i,currentelement.firstName,currentelement.lastName,currentelement.area,currentelement.products) //(i az index a currentelement pedig megnézi az adott elemnek a NEVÉT az AREÁJÁ és a PRODUKTJÁT)
        factory.addmano(companion)
        for(const produce of currentelement.products){
            companion.productadd(produce)
            
        }
    }

    console.log(factory)
    // TODO 6
}


initTable()

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.id;

    
    // TODO 10
}
