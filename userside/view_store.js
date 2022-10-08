
let header = document.getElementById('header');

window.addEventListener( 'scroll', () =>{
    if( scrollY > 100 ){
        header.style.backgroundColor = "rgba(243, 243, 243, 0.9)";
    } else{
        header.style.backgroundColor = "white";
    }
})