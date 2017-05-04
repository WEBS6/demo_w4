export class Hero{

    public id: number
    public name: String;
    public oneLiners: String[];

    constructor(id, name){
        this.id = id;
        this.name = name;
        this.oneLiners = [];
        this.oneLiners.push("To be or not to be");
    }

    public shout(msg : String): void{
        this.oneLiners.push(msg);
    }
}
