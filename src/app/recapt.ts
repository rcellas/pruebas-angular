const userName  ="Nicolas";

const sum = (a:number,b:number)=>{
  return a+b
}
sum(1,3)

class Person {
  // esto es demasiado largo y ts nos da otras opciones para hacerlo más rápido
  // age:number;
  // lastName:string;

  // constructor(age:number,lastName:string){
  //   this.age = age;
  //   this.lastName = lastName;
  // }

  // podemos asignarle si estos valores son publicos o privados
  constructor(age:number,lasName:string){}
}

const nico = new Person(15,'Molina');

