const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// console.log([buttons, body])

buttons.forEach(function(button) {
    console.log(button);
    //e -> represents PointerEvent (click Event)
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        //Better or optimized way to right above code
        //Below line is enough for above code as the button clicked will always be equal to that e.target.id
        //Thus, only need is to set e.target.id(color) to the body
        // body.style.backgroundColor = e.target.id;

    }); 
});