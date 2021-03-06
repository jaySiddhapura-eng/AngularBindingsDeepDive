import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // create the following properties 
  // this property emmits the event with the object which has serverName and serverContent
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  @ViewChild('viewChildVar', {static: true}) viewChildVar;

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddBlueprint() {
    // a code will actually emmits the data
    this.blueprintCreated.emit(
      { //this object will be emitted 
        serverName:this.newServerName,
        serverContent:this.newServerContent
      }
    );
  }

  onAddServer() {
    // following code will actually emmites the data
    this.serverCreated.emit(
      { // this object will be emitted 
        serverName:this.newServerName,
        serverContent:this.newServerContent
      }
    );
  }

  // this method is used for demo of local reference
  sendLocalref(inputedVar){
    console.log('local ref '+ inputedVar.value);
  }

  // this method is used for demo of viewChild functionality
  showValOfViewChildData(){
    console.log(this.viewChildVar);
  }

}

// when button is clicked 
// the inputed data will be pushed into the serverElement array
// server element array is located in server-element.component.ts file
// server-element.component.ts is not the part of cockpit component
