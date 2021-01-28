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


type PayStatus =
{
  status: string,
  prefixToDate: string,
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

interface MyUser {
  firstName: string,
  lastName: string,
  email: string,
  userStatus: boolean,
  lastLogin: string,
  payment: PayStatus,
  date: string,
  amount: number,
  id: number,
  visability: boolean,
}

export const myUsersArr: MyUser[] = [{
  firstName: 'Justin',
  lastName: ' Septimus',
  email: 'example@email.com',
  userStatus: true,
  lastLogin: 'Last login: 14/APR/2020',
  payment: paymentStatuses.paid,
  date: '15/APR/2020',
  amount: 200,
  id: 0,
  visability: true,
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
    visability: true,
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
    visability: true,
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
    visability: true,
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
    visability: true,
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
    visability: true,
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
    visability: true,
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
    visability: true,
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
