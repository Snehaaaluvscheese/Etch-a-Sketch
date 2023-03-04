const gridContainer = document.querySelector('#grid-container');

const div1 = document.createElement('div');
div1.classList.add('div1');
gridContainer.appendChild(div1);



for (let i = 1; i < 256; i++){
    const div2 = document.createElement('div');
    div2.classList.add('div2');
    gridContainer.appendChild(div2);

    div2.addEventListener('mouseover', () => {
        div2.classList.add('drawLines');
    });

    // creates 16x16 grid
    
}

div1.addEventListener('mouseover', () => {
    div1.classList.add('drawLines');
});

// draws lines on hover over grid

function gridSquares() {
   let result = prompt("Number of squares (not more than 100) per side?");
   if (result < 101) {
     

   }

   else return;
}

// function that makes new grid 

const btn = document.querySelector('#gridButton');
btn.addEventListener('click', () => { 
    gridSquares();
});

// button when clicked asks for squares per side 

