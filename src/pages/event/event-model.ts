export class Event{

  constructor( public title: string, public date: string,  public description?: string){
		this.title = title;
		this.date = date;
		this.description = description;
	}

}