import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 clients: Client[];
  constructor(private _ClientsService: ClientsService) { }

  ngOnInit() {
    this._ClientsService.getclients().subscribe(clients => {
       this.clients = clients;
      console.log(this.clients);
    });
  }

}
