interface TeamInterface {
    _id:string,
    name:String,
    shortName:String,
    createdDate:Date

}

class Team {
    id:string;
    name:String;
    shortName:String;
    createdDate:Date;

    constructor(data: TeamInterface){
        this.id=data._id;
        this.name=data.name;
        this.shortName=data.shortName;
        this.createdDate=data.createdDate;
    }


}

export { Team, TeamInterface };
