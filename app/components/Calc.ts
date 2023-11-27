
    export function calculatorCtoF() {
       // Obtenha o elemento de entrada pelo ID e faça uma type assertion para HTMLInputElement
       var inputElement = document.getElementById('input') as HTMLInputElement;
   
       // Verifique se o elemento de entrada não é nulo
       if (inputElement !== null) {
           // Converta o valor de entrada para um número inteiro
           var inputValue: number = parseInt(inputElement.value);
   
           // Verifique se inputValue é um número válido
           if (!isNaN(inputValue)) {
               //  cálculo para converter Celsius para Fahrenheit
               var cover = (inputValue * 1.8) + 32;

               var coverformated = cover.toFixed(2)
   
               // Obtenha o elemento de resultado pelo ID
               var resultadoElement = document.getElementById('resultado');
   
               // Verifique se o elemento de resultado não é nulo
               if (resultadoElement !== null) {
                   // Atualize o conteúdo do elemento de resultado com o resultado do cálculo em Fahrenheit
                   resultadoElement.innerHTML = coverformated + '°F';
               } else {
                   console.log('Elemento de resultado não encontrado');
               }
           } else {
               console.log('Valor de entrada inválido');
           }
       } else {
           console.log('Elemento de entrada não encontrado');
       }
   }
   
  export function calculatorFtoC() {
    
     var inputElement = document.getElementById('input') as HTMLInputElement;
   
     
     if (inputElement !== null) {
        
         var inputValue: number = parseInt(inputElement.value);
   
         if (!isNaN(inputValue)) {
             
             var cover = (inputValue - 32)/ 1.8;

             var coverformated = cover.toFixed(2)
   
             
             var resultadoElement = document.getElementById('resultado');
   
             
             if (resultadoElement !== null) {
                
                 resultadoElement.innerHTML = coverformated + '°C';
             } else {
                 console.log('Elemento de resultado não encontrado');
             }
         } else {
             console.log('Valor de entrada inválido');
         }
     } else {
         console.log('Elemento de entrada não encontrado');
     }
   }
   
   export function calculatorCtoK() {
    
     var inputElement = document.getElementById('input') as HTMLInputElement;
   
     
     if (inputElement !== null) {
        
         var inputValue: number = parseInt(inputElement.value);
   
         
         if (!isNaN(inputValue)) {
            
             var cover = (inputValue +273.15)

             var coverfomated = cover.toFixed(2)
   
             
             var resultadoElement = document.getElementById('resultado');
   
             
             if (resultadoElement !== null) {
                
                 resultadoElement.innerHTML = coverfomated + '°K';
             } else {
                 console.log('Elemento de resultado não encontrado');
             }
         } else {
             console.log('Valor de entrada inválido');
         }
     } else {
         console.log('Elemento de entrada não encontrado');
     }
   }
   
  export function calculatorKtoC() {
     
     var inputElement = document.getElementById('input') as HTMLInputElement;
   
     
     if (inputElement !== null) {
         
         var inputValue: number = parseInt(inputElement.value);
   
        
         if (!isNaN(inputValue)) {
             
             var cover = (inputValue - 273.15);
             var coverformated = cover.toFixed(2)
   
             
             var resultadoElement = document.getElementById('resultado');
   
             
             if (resultadoElement !== null) {
                 
                 resultadoElement.innerHTML = coverformated + '°C';
             } else {
                 console.log('Elemento de resultado não encontrado');
             }
         } else {
             console.log('Valor de entrada inválido');
         }
     } else {
         console.log('Elemento de entrada não encontrado');
     }
   }