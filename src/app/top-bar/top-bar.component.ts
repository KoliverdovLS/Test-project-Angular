import {Component, OnInit} from '@angular/core';
import { myUsersArr } from '../lsit-users/list-users.component';
import {element} from 'protractor';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {
  textConstants = {
    textBtnAddUser: "+ ADD USER",
    textBtnFilter: "Filter",
  }
  constructor() {
  }
  keyUp(event) {
    let text:string = event.target.value;
    console.log(text);
    myUsersArr.forEach(el => {
      el.visability = el.firstName.match(text) !== null || el.lastName.match(text) !== null;
    });
  }

  ngOnInit() {
    //myUsersArr.sort((a,b) => b.amount - a.amount);
  }
}


