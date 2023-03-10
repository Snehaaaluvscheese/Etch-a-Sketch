const gridContainer = document.querySelector('#grid-container');

// selected div with id grid-container 

function makeGrid(side) {


    
    for (let i = 0; i < (side * side); i++) {

        gridContainer.style.cssText =   `grid-template-columns: repeat(${side}, 25fr); grid-template-rows: repeat(${side}, 25fr);`

        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        gridContainer.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', () => {
            gridDiv.classList.add('drawLines');
          });
      }

    }

    // function to style and make Grid and add hover effect

    makeGrid(16);
    // calls function to make 16 x 16 grid 