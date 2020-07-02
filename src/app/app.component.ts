import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type:'server',name:'Testserver', content:'just a test'} // this is the sample element
   
  ];

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push(
      {
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
      }
    );
  }

  onBlueprintAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push(
      {
        type:'blueprint',
        name:serverData.serverName,
        content: serverData.serverContent
      }
    );
  }
}


// serverElements is an array
// this array holds element object
// to demonstrate one element object is added at the moment
// but this element will be supplied from server-element component

// the serverElements array is given to the app component html