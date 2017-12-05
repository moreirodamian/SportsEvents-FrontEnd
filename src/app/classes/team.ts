interface TeamInterface {
    id:Object,
    name:String,
    shortName:String,
    createdDate:Date

}
class Team {
    id:Object;
    name:String;
    shortName:String;
    createdDate:Date;

    constructor(data: TeamInterface){
        this.id=data.id;
        this.name=data.name;
        this.shortName=data.name;
        this.createdDate=data.createdDate;
    }


}

export { Team, TeamInterface};
