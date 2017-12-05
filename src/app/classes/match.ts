interface MatchInterface {
    id:Object,
    status:String,
    startDate:Date

}
class Match {
    id:Object;
    status:String;
    startdDate:Date;

    constructor(data: MatchInterface){
        this.id=data.id;
        this.status=data.status;
        this.startdDate=data.startDate;
    }


}

export { Match, MatchInterface};