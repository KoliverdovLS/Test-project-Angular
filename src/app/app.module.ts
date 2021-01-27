import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { listUsersComponent} from './lsit-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    listUsersComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
