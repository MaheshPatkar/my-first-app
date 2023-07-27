import { Component } from "@angular/core";



@Component({
   templateUrl:"./server.component.html",
   selector: 'app-server',
   styles: [`
   .online {
      color:white
   }
   `]

})
export class ServerComponent{
   serverId: number = 1
   serverStatus: string 


   constructor()
   {
      this.serverStatus = Math.random() > 0.5 ? 'Online': 'Offline'
   }

   getColor()
   {
      return this.serverStatus === 'Online' ? 'Green' : 'Red';
   }


}
