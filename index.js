 function  UsingForLoop (){

    const gabarito = ['jorge','carlos','henrique','jose','zé da manga']


        for (let i = 0; i < gabarito.length; i++) {

            console.log(gabarito[i], i)

        }
   
     
}

function UsingWhileLoop(){

    const gabarito = ['julio','bigode','robocop','jose','zé da manga']
    
    let i = 0;
while (i < gabarito.length) {
  
  console.log(gabarito[i], i );
  i++;
}

}

function UsingDoWhileLoop(){

    let i = 0;
do {
  console.log(i);
  i=(i+2);
} while (i < 10);
}

function UsingForInLoop(){
    const person = {
        name: 'John',
        age: 30,
        city: 'New York',
        country:'EUA'
      };
      
      for (let key in person) {
        
        console.log(key + ': ' + person[key]);
      }



      const gregorios = ['carlos','flavio','rogerio']

        for (let bob in gregorios) {
        console.log(bob + ':' + gregorios[bob]);
      }
}


function UsingForOfLoop(){
    
    const fruits = ['apple', 'banana', 'orange','beérgamoóta'];

for (let fruit of fruits) {
  console.log(fruit);
}

   const robertos = ['Roberto Caminhoneiro', 'Roberto Abestado', 'roberto biruleib', 'Roberto ateu']

   for(let tipoderoberto of robertos){
    
    console.log(tipoderoberto)
   }



}

function UsingForEachLoop(){

    const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

  const amigosdaonça =['jolie', 3, 'caneta azul', 5 , 'defante']

  amigosdaonça.forEach(onça => {
    console.log(onça)
    
  });

  
}



   




