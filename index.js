class Media {
    constructor(name, title, isCheckOut, rating) {
        this._name = name;
        this._title = title;
        this._isCheckOut = false;
        this._rating = [];
    }

    get name() {
        return this._name;
    }

    get title() {
        return this._title;
    }
    get isCheckOut() {
        return this._isCheckOut;
    }
    //SETTER PARA LA IS CHECK OUT 
     set isCheckOut(valor){
         console.log(typeof(valor))
         if(typeof(valor)==='boolean'){
            return this._isCheckOut=valor;

         }else{
             console.log('Valor incorrectos para el tipo de set'); 
         }
     }
    //
    get rating() {
        return this._rating;
    }
    ///

    toggleCheckOutStatus(){
        
        if (this._isCheckOut===true) {
            this._isCheckOut=false;
            console.log("estamos aca");

            
        }else{
            this._isCheckOut=true;
            console.log("estamos aca segundo");

        }
    }

    getAverageRating(){

       let sum= this._rating.reduce((currentSum,rating)=>currentSum+rating);

       let ave= sum/this._rating.length;
       return ave;

    }


    addRating(number){
        this._rating.push(number);

    }

}


class Book extends Media{
    constructor(name,title,pages,isCheckOut,rating){
        super(name,title,isCheckOut,rating);
       
        this._pages=pages;
    }
    get pages (){
        return this._pages;
    }
}


//No necesariamente tenemos que enviar los otros datos ya que son previamente inicializados.

let book = new Book("Jk willians",' Harry Potter',543);
book.addRating(10);
book.addRating(330);
book.addRating(50);
book.addRating(80);
book.addRating(40);

book.toggleCheckOutStatus();

console.log(book._isCheckOut)
//

class Movie extends Media{
    constructor(name,title,runtime,isCheckOut,rating){
        super(name,title,isCheckOut,rating);
        this._runtime=runtime;

    }

    get runtime(){
        return this._runtime;
    }

}


let movie = new Movie('Jan de bont','Speed',1998);

console.log(movie.name);
