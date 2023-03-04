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
    
}

div1.addEventListener('mouseover', () => {
    div1.classList.add('drawLines');
});

function gridSquares() {
   let result = prompt("Number of squares (not more than 100) per side?");
   if (result < 101) {
    
        gridContainer.setAttribute('style', `
            display: grid;
            width: 400px;
            height: 400px;
            grid-column-start: 1;
            grid-column-end:${result}; 
            grid-row-start: 1;
            grid-row-end: ${result};
            margin-left: 20cm;
            margin-top: 8cm;
            padding: 0;
          
          `);

        gridContainer.removeAttribute('id', 'grid-container');
    

   }
}

const btn = document.querySelector('#gridButton');
btn.addEventListener('click', () => { 
    gridSquares();
});


