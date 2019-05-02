import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cats : any;
  title = 'ang-test';

  constructor(private testService : TestService){
    testService.getCats().subscribe(
      (result)=>{
        this.cats = result;
        console.log(result);
      },
      (error)=>{console.log(error);
      },
      ()=>{console.log("end og subscribe")}
    )
  }
  newCat(){
    this.testService.postCat({id : 123, data : "data"}).subscribe(res =>{
      console.log(res)
    })
    
  }
}
