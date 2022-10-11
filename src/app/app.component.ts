import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newer';
hi:any[]=[];

  constructor(private _service:DataService){
  }

ngOnInit(){
  this.hello();
}

  hello(){
    this._service.gettingApi().subscribe(
      (response:any)=>{
        this.hi=response;
        console.log(response);
      },
      (error:any)=>console.log(error)
    )
  }


}
