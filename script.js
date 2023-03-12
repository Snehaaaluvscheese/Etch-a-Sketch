const gridContainer = document.querySelector('#grid-container');

// selected div with id grid-container 


function makeGrid(side) {


    
    for (let i = 0; i < (side * side); i++) {

        gridContainer.style.cssText =   `grid-template-columns: repeat(${side}, 40fr); grid-template-rows: repeat(${side}, 40fr);`

        const gridDiv = document.createElement('div');
        gridDiv.style.cssText = `border: 1px solid darkmagenta;`;
        gridDiv.classList.add('grid-div');
        gridContainer.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', () => {
            gridDiv.classList.add('drawLines');
          });

       
      }

     


    }

   
    // function to style and make Grid and add hover effect
     
    makeGrid(16);

    
    
    
  

    const btn = document.querySelector('#gridButton');
    btn.addEventListener('click', () => { 
        while(gridContainer.firstChild) {
        gridContainer.firstChild.remove();
        }
        
        
       

        
            stop: for (;;) {

              let result = prompt("Number of squares (not more than 100) per side?");
               if (result >= 1 && !isNaN(result) && result <= 100) {
                makeGrid(result);
                break stop;
               }
               else {
               alert("Please enter valid number not less than 1 and not more than 100 !! :(")
               
        
               }
            }
         
    });

    // button when clicked asks for squares per side 