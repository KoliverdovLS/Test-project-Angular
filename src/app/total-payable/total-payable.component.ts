import {Component, Input, OnInit} from '@angular/core';
import {myUsersArr} from '../lsit-users/list-users.component';

@Component({
  selector: 'app-total-payable',
  templateUrl: './total-payable.component.html',
  styleUrls: ['./total-payable.component.css']
})

export class TotalPayableComponent implements OnInit {
  textTotalPayed = 'Total payed: '
  @Input() myUserArr;
  constructor() {
  }
  getSum() {
    return  myUsersArr.reduce((acc, curr) => {
      if (curr.payment.status === 'Paid' && curr.visability) {
        return acc + curr.amount;
      }
      return acc;
    }, 0);
  }
  ngOnInit() {
  }
}
