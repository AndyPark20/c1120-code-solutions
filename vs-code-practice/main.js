
// function carInfo(year, make, model, mileage) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.carmd.com/v3.0/maint?year=' + year + '&make=' + make + '&model=' + model + '&mileage=' + mileage);
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.setRequestHeader("authorization", "Basic NDU4MmQ1YTQtNzI5Mi00ZThjLWExZjQtYjU4MmNmNzc3YjFh");
//   xhr.setRequestHeader("partner-token", "5228fbdcf1fa422392b0f7ff3226cfbb");
//   xhr.responseType='json';
//   xhr.addEventListener('load', function(){
//     console.log(xhr.status);
//     console.log(xhr.response);
//     carInfo.year = year;
//     carInfo.make = make;
//     carInfo.model = model;
//     carInfo.service.push(xhr.response);
//   })

//   xhr.send();

// }

// carInfo(2010, 'SUBARU', 'FORESTER', 70000)


// function recall(){
//   var xhr=new XMLHttpRequest();
//   xhr.open('GET','https://api.codetabs.com/v1/proxy?quest=https://webapi.nhtsa.gov/api/Complaints/vehicle/modelyear/2012/make/bmw/model/m3?format=json');
//   xhr.responseType='json';
//   xhr.addEventListener('load',function(){
//     console.log(xhr.status);
//     console.log(xhr.response)
//   })
// xhr.send();
// }

// recall()
