User = [{"id":1,"firstname":"Randall","lastname":"Weissnat","email":"spencer90@gmail.com","phone":"+3298582926404","birthday":"2011-01-14","gender":"male","address":{"id":0,"street":"35757 Prudence Brook","streetName":"Camron River","buildingNumber":"6536","city":"West Miltonland","zipcode":"89954-3240","country":"Myanmar","county_code":"EC","latitude":12.533007,"longitude":21.291265},"website":"http:\/\/sporer.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":2,"firstname":"Marlen","lastname":"Kuhn","email":"damian.bednar@feest.info","phone":"+5401768599320","birthday":"1937-10-10","gender":"female","address":{"id":0,"street":"38798 Michael Inlet Suite 219","streetName":"Carmen Lights","buildingNumber":"8029","city":"Port Concepcion","zipcode":"74398","country":"Iran","county_code":"RU","latitude":-9.836556,"longitude":79.334916},"website":"http:\/\/damore.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":3,"firstname":"Deion","lastname":"Kirlin","email":"eliza85@gmail.com","phone":"+4248353096431","birthday":"2016-11-13","gender":"male","address":{"id":0,"street":"707 Talia Ferry Suite 363","streetName":"Dannie Coves","buildingNumber":"96193","city":"New Valentine","zipcode":"53482","country":"Malta","county_code":"MG","latitude":-44.273461,"longitude":92.00406},"website":"http:\/\/feeney.biz","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":4,"firstname":"Octavia","lastname":"Rutherford","email":"ypredovic@hotmail.com","phone":"+6516388639174","birthday":"1968-04-26","gender":"female","address":{"id":0,"street":"619 Patrick Valley","streetName":"Jameson Spring","buildingNumber":"6697","city":"New Christianmouth","zipcode":"68946","country":"Iceland","county_code":"FK","latitude":-57.122383,"longitude":65.614536},"website":"http:\/\/barrows.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":5,"firstname":"Kaycee","lastname":"Hauck","email":"vmcglynn@ferry.info","phone":"+1115726888080","birthday":"2007-08-25","gender":"female","address":{"id":0,"street":"958 Greenfelder Motorway","streetName":"Sasha Lane","buildingNumber":"28178","city":"North Deontae","zipcode":"51889-8742","country":"Italy","county_code":"SM","latitude":3.392554,"longitude":-131.11587},"website":"http:\/\/welch.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":6,"firstname":"Camryn","lastname":"Heathcote","email":"murphy.dominic@gmail.com","phone":"+8666817691596","birthday":"1979-04-20","gender":"male","address":{"id":0,"street":"997 Lind Extension","streetName":"Lueilwitz Course","buildingNumber":"99384","city":"East Aliza","zipcode":"71085","country":"Comoros","county_code":"CN","latitude":-71.649411,"longitude":-68.819499},"website":"http:\/\/torp.info","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":7,"firstname":"Ronny","lastname":"Hane","email":"wgoyette@gmail.com","phone":"+6789896802795","birthday":"2009-02-24","gender":"male","address":{"id":0,"street":"2211 Marie Pass","streetName":"Zita Harbors","buildingNumber":"1453","city":"South Jordyberg","zipcode":"58271","country":"Namibia","county_code":"DE","latitude":48.13038,"longitude":-6.918924},"website":"http:\/\/kautzer.biz","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":8,"firstname":"Christiana","lastname":"Lueilwitz","email":"schneider.sammie@yahoo.com","phone":"+4918395212240","birthday":"1963-07-09","gender":"female","address":{"id":0,"street":"823 Hahn Row","streetName":"Rodriguez Brook","buildingNumber":"840","city":"Oliverborough","zipcode":"89926-2517","country":"Puerto Rico","county_code":"PF","latitude":-4.823797,"longitude":-62.04946},"website":"http:\/\/nikolaus.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":9,"firstname":"Marc","lastname":"Ullrich","email":"kulas.clotilde@hotmail.com","phone":"+9872656355833","birthday":"2003-12-24","gender":"male","address":{"id":0,"street":"25548 Minnie Plains","streetName":"Little Forge","buildingNumber":"2437","city":"Tyresechester","zipcode":"51307-3675","country":"British Indian Ocean Territory (Chagos Archipelago)","county_code":"CA","latitude":20.376961,"longitude":-121.534609},"website":"http:\/\/friesen.biz","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":10,"firstname":"Providenci","lastname":"Jerde","email":"joe.klocko@mayert.com","phone":"+1363269083792","birthday":"1935-04-09","gender":"female","address":{"id":0,"street":"7354 Zoie Squares Apt. 137","streetName":"Waylon Spring","buildingNumber":"6449","city":"Thompsonstad","zipcode":"34231-8758","country":"Pakistan","county_code":"GW","latitude":21.282224,"longitude":134.96264},"website":"http:\/\/rice.net","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":11,"firstname":"Eulalia","lastname":"Lockman","email":"jacques91@hotmail.com","phone":"+9977145141409","birthday":"1999-10-22","gender":"female","address":{"id":0,"street":"337 Manley Walks Apt. 123","streetName":"Dena Crescent","buildingNumber":"659","city":"East Jovany","zipcode":"49739-6724","country":"Macedonia","county_code":"LY","latitude":-18.180724,"longitude":-32.697695},"website":"http:\/\/bode.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":12,"firstname":"Walter","lastname":"Mann","email":"jamey18@yahoo.com","phone":"+3821884018048","birthday":"1964-05-29","gender":"male","address":{"id":0,"street":"99617 Hammes Keys Suite 594","streetName":"Garfield Tunnel","buildingNumber":"169","city":"Collierville","zipcode":"14475-0352","country":"Nepal","county_code":"GH","latitude":-18.221179,"longitude":127.506049},"website":"http:\/\/weber.com","image":"http:\/\/placeimg.com\/640\/480\/people"}];

function getNumber(a=0, b=0){
    return Math.floor(Math.random() * (a-b)+b)
}
function getColor(a){
    let r = getNumber(256),
    g = getNumber(256),
    b = getNumber(256);
    return `rgba(${r},${g},${b}, ${a/100})`;
}
class Users {
    constructor(obj){
        this.id = obj.id;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.gender = obj.gender
        this.image = obj.image
        this.phone = obj.phone
        this.website = obj.web
        this.address = obj.address
        this.birthday = obj.birthday
        this.email = obj.email
        this.color = getColor(100)
    }
}
let data = []
for(let i = 0;i<User.length;i++){
    let person = User[i]
    data.push(new Users(person))
}
console.log(data)

let html="";
for(let val of data){
    html +=`<div style="display: flex; flex-direction: column; gap: 10px;" class="main"><div class="card" style="background-color: ${val.color}; width: 300px; text-align: center;"
    <h1 style="font-size: 30px;">${val.id}</h1>
    <h2>${val.firstname} ${val.lastname}</h2>
    <img src="https://api.psychologos.ru/storage/image/dp6if3h.jpg" width=150px>
    <div>${val.birthday} ${val.gender}</div>
    <div class = "info"><ul><li>${val.phone}</li><li>${val.email}</li><li>${val.phone}</li></ul>
    <h3>${val.address.country}</h3>
    </div>
    </div>`
}

document.write(html)