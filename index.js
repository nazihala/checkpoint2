let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];

const getAge=pet=>new Date().getFullYear() - pet.bornOn;
let petsWithAge=[];

pets.forEach(pet=>{pet.age=getAge(pet)
    petsWithAge.push(pet);
}
);
let dogs =[];
pets.find(pet=>{pet.type==="dog";
dogs.push(pet);})

console.log(dogs);




