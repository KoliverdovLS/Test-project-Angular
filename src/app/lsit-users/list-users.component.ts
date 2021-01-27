import {Component, OnInit} from '@angular/core';


let textConstans = {
  nameColumn: 'NAME',
  userStatusColumn: 'USER STATUS',
  paymentStatusColumn: 'PAYMENT STATUS',
  amountColumn: 'AMOUNT',
  viewMore: 'View More',
  usdText: 'USD',
  usdIcon: '$',

}

let paymentStatuses = {
  paid: {
    status: 'Paid',
    prefixToDate: 'Paid on ',
  },
  unpaid: {
    status: 'Unpaid',
    prefixToDate: 'Dues on ',
  },
  overdue: {
    status: 'Overdue',
    prefixToDate: 'Dued on ',
  }
}

interface myUser {
  firstName: string,
  lastName: string,
  email: string,
  userStatus: boolean,
  lastLogin: string,
  payment: object,
  date: string,
  amount: number,
  id: number,
}

export const myUsersArr: myUser[] = [{
  firstName: 'Justin',
  lastName: ' Septimus',
  email: 'example@email.com',
  userStatus: true,
  lastLogin: 'Last login: 14/APR/2020',
  payment: paymentStatuses.paid,
  date: '15/APR/2020',
  amount: 200,
  id: 0,
  },
  {
    firstName: 'Anika',
    lastName: ' Madsen',
    email: 'example@email.com',
    userStatus: true,
    lastLogin: 'Last login: 14/APR/2020',
    payment: paymentStatuses.overdue,
    date: '15/APR/2020',
    amount: 300,
    id: 1,
  },
  {
    firstName: 'Miracle',
    lastName: ' Vaccaro',
    email: 'example@email.com',
    userStatus: true,
    lastLogin: 'Last login: 14/APR/2020',
    payment: paymentStatuses.paid,
    date: '15/APR/2020',
    amount: 250,
    id: 2,
  },
  {
    firstName: 'Mira',
    lastName: ' Herwitz',
    email: 'example@email.com',
    userStatus: false,
    lastLogin: 'Last login: 14/APR/2020',
    payment: paymentStatuses.paid,
    date: '15/APR/2020',
    amount: 200,
    id: 3,
  },
  {
    firstName: 'Erin',
    lastName: ' Levin',
    email: 'example@email.com',
    userStatus: true,
    lastLogin: 'Last login: 14/APR/2020',
    payment: paymentStatuses.unpaid,
    date: '15/APR/2020',
    amount: 200,
    id: 4,
  },
  {
    firstName: 'Jaxson',
    lastName: ' Siphron',
    email: 'example@email.com',
    userStatus: false,
    lastLogin: 'Last login: 14/APR/2020',
    payment: paymentStatuses.paid,
    date: '15/APR/2020',
    amount: 750,
    id: 5,
  },
  {
    firstName: 'Mira',
    lastName: ' Levin',
    email: 'example@email.com',
    userStatus: true,
    lastLogin: 'Last login: 14/APR/2020',
    payment: paymentStatuses.unpaid,
    date: '15/APR/2020',
    amount: 200,
    id: 6,
  },
  {
    firstName: 'Lincoln',
    lastName: ' Levin',
    email: 'example@email.com',
    userStatus: true,
    lastLogin: 'Last login: 14/APR/2020',
    payment: paymentStatuses.paid,
    date: '15/APR/2020',
    amount: 370,
    id: 7,
  }];


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class listUsersComponent implements OnInit {
  arrUsers = myUsersArr;
  textConstans = textConstans;

  constructor() {
  }
  ngOnInit() {
  }
}
