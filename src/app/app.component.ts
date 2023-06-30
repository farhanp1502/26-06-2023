import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser"
//         import this file first

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '26-06-2023';
  hide = true;
  show = true;
  movie = {
    img:"https://pixabay.com/images/search/nature/"
  }
  constructor(private titleservice:Title){
    //                     this is how we set the title in angular 
    titleservice.setTitle("Example")

     //                     this is how we get the title in angular 
 let a = titleservice.getTitle()
 console.log(a);
  }

  buttoncolor = "red" ; 
  onclick(){
    this.buttoncolor = "black";
  }
}
