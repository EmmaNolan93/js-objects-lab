const aCar = {
    owner : "Joe Bloggs",
    type : {
       model: 'Corolla ',
       make: 'Toyota',
       CC: '1.8'    
    }
    ,
    registration: { year: 201, county: "WD", number: 1058 }
};
aCar.Millage = 10000;
aCar.color = {
    exterior: "red",
    interiorFabric: { texture: "leather", shade: "cream" }
  }
console.log(aCar.owner + " drives a " + aCar.type.make);
console.log( "Reg. = " + aCar.registration.year + "-" + aCar.registration.county +"-" +aCar.registration.number);
console.log( "It is a " +  aCar.color.exterior + " car, " + aCar.milage +  " milage, with " + aCar.color.interior.texture + " interior.");