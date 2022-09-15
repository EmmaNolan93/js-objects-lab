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
console.log( "It is a " +  aCar.color.exterior + " car, " + aCar.milage +  " milage, with " + aCar.color.interiorFabric.texture + " interior.");
const aCar1 = {
    owner: "Joe Bloggs",
    previous_owners: [
      { name: "Pat Smith", address: "1 Main Street" },
      { name: "Sheila Dwyer", address: "2 High Street" }
    ],
  }
  console.log(
    "First owner: " +
      aCar1.previous_owners[0].name +
      ' - ' +
      aCar1.previous_owners[0].address
  )
  for (let i = 0 ; i < aCar1.previous_owners.length ; i += 1) {
    console.log(aCar1.previous_owners[i].name);
}