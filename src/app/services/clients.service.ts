import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList , AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';


@Injectable()
export class ClientsService {
  // clients: AngularFireList<any[]>;
  // client: AngularFireObject<any>;
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/clients').valueChanges();
  }
  getclients() {
    return this.items;
  }
}
