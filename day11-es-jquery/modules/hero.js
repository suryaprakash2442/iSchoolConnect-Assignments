import { Person } from "./person.js"


export class Hero extends Person{
    firstname = "Default F";
    lastname = "Default L";
    _secret = "my secret mission";
    static version = 1001;
    constructor(fname, lname, ncity){
        super(ncity)
        this.firstname = "Bruce";
        this.lastname = "Wayne";
    }
    fullname(){
        return this.firstname + " " + this.lastname;
    }
    get secret(){
        return this._secret;
    }
    set secret(nsecret){
        this._secret = nsecret;
    }
};

let hero = new Hero("Bruce","Wayne","Gotham");
        console.log(hero.firstname, hero.lastname);
        console.log(hero.fullname());
        console.log(hero.secret);
        console.log(hero.city);