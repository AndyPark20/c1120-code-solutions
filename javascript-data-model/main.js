/* exported orderHistory */

const { PureComponent } = require("react");

var orderHistory = [
  {
    order: {
      type: 'books',
      author: 'Rauschmayer, Dr.Axel',
      title: 'JavaScript for impatient programmers',
      ship_to: 'JS Masher',
      order_placed: 'August 4,2020',
      delivered_date: 'August 8, 2020',
      return_window: 'September 7, 2020',
      order_number: '114-3941689-8772232',
      subTotal: '$31.55',
      total: '$34.00',
    }
  },

  {
    order: {
      type: 'books',
      author: 'Alexander, Christopher',
      title: 'The Timeless Way of Building',
      ship_to: 'JS Masher',
      order_placed: 'July 19,2020',
      delivered_date: 'August 20, 2020',
      return_window: 'August 19, 2020',
      order_number: '113-9984268-1280257',
      subTotal: '$41.33',
      total: '$44.53',
    }
  },

  {
    order: {
      type: 'electronics',
      description: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, Pc.Support Turbo and Vibration Features.No Driver and No Lag- Gamecube Adapter',
      ship_to: 'JS Masher',
      order_placed: 'July 4,2020',
      delivered_date: 'July 7, 2020',
      return_window: 'August 5, 2020',
      order_number: '113-2875557-9059409',
      subTotal: '$15.98',
      total: '$17.22',
    }
  },

  {
    order:[
      {
        type:'electronics',
        description:'GameCube Controller- Super Smash Bros. Edition (Nintendo Switch)',
        ship_to: 'JS Masher',
        order_placed: 'July 3,2020',
        delivered_date: 'July 5, 2020',
        return_window: 'August 4, 2020',
        order_number: '113-2883177-2648248',
        subTotal: '$94.95',
        total: '$138.93',
      },
      {
        type: 'books',
        author: 'Faroult, Stephane',
        title: 'The Art of Sql',
        ship_to: 'JS Masher',
        order_placed: 'July 3,2020',
        delivered_date: 'July 5, 2020',
        return_window: 'August 4, 2020',
        order_number: '113-2883177-2648248',
        subTotal: '$33.99',
        total: '$138.93',
      }
    ]
  }
];
