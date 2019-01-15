'use strict';
var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

var locations = [
  {
    location: '1st and Pike',
    domTargetId: 'pike',
    minCustomers: 23,
    maxCustomers: 65,
    avgCustomerSales: 6.3,
    getHourlyCookieSales: function() {
      return generateHourlyCookies(this);
    },
    render: function() {
      renderToDOM(this);
    },
    getTotal: function() {
      return generateTotal(this);
    },
    hourlySales: [],
    total: 0
  },
  {
    location: 'SeaTac Airport',
    domTargetId: 'seatac',
    minCustomers: 3,
    maxCustomers: 24,
    avgCustomerSales: 1.2,
    getHourlyCookieSales: function() {
      return generateHourlyCookies(this);
    },
    render: function() {
      renderToDOM(this);
    },
    getTotal: function() {
      return generateTotal(this);
    },
    hourlySales: [],
    total: 0
  },
  {
    location: 'Seattle Center',
    domTargetId: 'center',
    minCustomers: 11,
    maxCustomers: 38,
    avgCustomerSales: 3.7,
    getHourlyCookieSales: function() {
      return Math.floor(generateHourlyCookies(this));
    },
    render: function() {
      renderToDOM(this);
    },
    getTotal: function() {
      return generateTotal(this);
    },
    hourlySales: [],
    total: 0
  },
  {
    location: 'Capitol Hill',
    domTargetId: 'capitol',
    minCustomers: 20,
    maxCustomers: 38,
    avgCustomerSales: 2.3,
    getHourlyCookieSales: function() {
      return generateHourlyCookies(this);
    },
    render: function() {
      renderToDOM(this);
    },
    getTotal: function() {
      return generateTotal(this);
    },
    hourlySales: [],
    total: 0
  },
  {
    location: 'Alki',
    domTargetId: 'alki',
    minCustomers: 2,
    maxCustomers: 16,
    avgCustomerSales: 4.6,
    getHourlyCookieSales: function() {
      return generateHourlyCookies(this);
    },
    render: function() {
      renderToDOM(this);
    },
    getTotal: function() {
      return generateTotal(this);
    },
    hourlySales: [],
    total: 0
  }
];

//return number of hourly customer
function getHourlyCustomers(ctx) {
  return Math.floor(Math.random() * (ctx.maxCustomers - ctx.minCustomers + 1)) + ctx.minCustomers;
}

//generate and store hourly cookies, return for convenience
function generateHourlyCookies(ctx) {
  for (var i = 0; i < hours.length; i++) {
    ctx.hourlySales.push(Math.ceil(getHourlyCustomers(ctx) * ctx.avgCustomerSales));
  }
  return ctx.hourlySales;
}

//generate and store total, return for convenience
function generateTotal(ctx) {
  var total = 0;
  for (var i = 0; i < ctx.hourlySales.length; i++) {
    total += ctx.hourlySales[i];
  }
  ctx.total = total;
  return ctx.total;
}

//Reusble render function
function renderToDOM(ctx) {
  var targetUl = document.getElementById(ctx.domTargetId);
  console.log({ hourlySales: ctx.getHourlyCookieSales() });

  for (var i = 0; i < hours.length; i++) {
    var hourlyCookiesEl = document.createElement('li');
    hourlyCookiesEl.textContent = `${hours[i]}: ${ctx.hourlySales[i]} cookies`;
    targetUl.appendChild(hourlyCookiesEl);
  }
  console.log({ total: ctx.getTotal() });
  var totalEl = document.createElement('li');
  totalEl.textContent = `Total: ${ctx.getTotal()} cookies`;
  targetUl.appendChild(totalEl);
}

//Run
for (var i = 0; i < locations.length; i++) {
  locations[i].render();
}
