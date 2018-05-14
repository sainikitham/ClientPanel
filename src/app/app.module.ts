import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ClientsService } from './services/clients.service';

const approutes: Routes = [
  {path : '', component: DashboardComponent },
  {path : 'login', component: LoginComponent },
  {path : 'register', component: RegisterComponent }

];
export const firebaseconfig = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDSNNocI8Ppj-2at3zbiJ4Dr2ok9kTrxXw',
    authDomain: 'clientpanel-dbad9.firebaseapp.com',
    databaseURL: 'https://clientpanel-dbad9.firebaseio.com/',
    projectId: 'clientpanel-dbad9',
    storageBucket: 'clientpanel-dbad9.appspot.com',
    messagingSenderId: '157049607189'
  }
};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientdetailsComponent,
    AddclientComponent,
    EditclientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig.firebase)
  ],
  providers: [AngularFireDatabase, AngularFireAuth, ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
