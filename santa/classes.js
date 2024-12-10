class Factory{
    constructor()
    {
        this.manolist = []  //Létrehozzuk manólista tulajdnságot, üres liste mivel az új gyárhoz nem tartozik manó, majd ha adunk hozzá manót ehhez fogjuk mehívni.
    }

    addmano(mano) { // Mano paraméter mert a mano lista elérhető az osztályon belül vagyunk.

        this.manolist.push(mano)
        createRow(mano)
    }

    ujid() {
        return this.manolist.length
    }
 // TODO 1, 2, 3, 4, 9, 10
}
/*
id , keresztnev, vezeteknev, reszleg
*/

class Companion{
    constructor(id, keresztnev, vezetknev, reszleg)
    {
    this.id = id
    this.keresztnev = keresztnev
    this.vezetknev = vezetknev
    this.reszleg = reszleg
    this.productlist = [] // Nem kötelező megadni ezért nem kell a propretybe írni de kell mivel ez lesz az odalon le üresen kezdődik
    }

    getname() {

    return  this.keresztnev + " " + this.vezetknev  //Azért igy mert a class tulajdonságaira hivatkozunk
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }

    productadd(product) 
    {
        this.productlist.push(product)
    } 

}

 // TODO 5


