export class Event{

  constructor( public title: string= "", public date: string = "" ,  public description?: string, public _id?: string){
		this._id = _id;
		this.title = title;
		this.date = date;
		this.description = description;
	}

}