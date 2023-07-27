import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  isDisabled: boolean = true
  serverCreationStatus: string = "No Server Created So Far"
  serverName: string = ""
  newServerCreated = false;
  servers = ['Server A','Server B']
  constructor()
  {
    setTimeout(() => {
      this.isDisabled = false
    }, 100);
  }


  AddServer()
  {
    this.serverCreationStatus = "New Server Created,name of the server is " + this.serverName
    this.newServerCreated = true;
    this.servers.push(this.serverName)
    
  }

  EditServerName(event:any)
  {
    console.log(event.target.value)
    this.serverName = event.target.value
    console.log(this.serverName)
  }
 

}
