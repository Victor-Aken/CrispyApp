

//Big Cards Menu
let bigCardMenuIcon = document.querySelectorAll('.show-menu');

bigCardMenuIcon.forEach( eachBigCardMenuIcon => {
    eachBigCardMenuIcon.addEventListener( 'click', () => {
        let menu = eachBigCardMenuIcon.parentElement.parentElement.children[0]; 
        menu.classList.toggle('show');

    })
})


window.addEventListener('mouseup', function(e){

    bigCardMenuIcon.forEach( eachBigCardMenuIcon => {
            let menu = eachBigCardMenuIcon.parentElement.parentElement.children[0];

            if(e.target !== menu && e.target !== menu.childNodes){
                if(menu.classList.contains('show')){
                    menu.classList.remove('show');
            }
       }
    })
    
})


//Active and Inactive Stores Icons
let activeIcon = document.querySelectorAll('#active-icon');
let inactiveIcon = document.querySelectorAll('#inactive-icon');

activeIcon.forEach( eachActiveIcon => {
    eachActiveIcon.addEventListener( 'click', () => {
        let eachActiveIconParent = eachActiveIcon.parentElement;
        let off_icon = eachActiveIconParent.querySelector('#inactive-icon');
        let active_inactive_mode = eachActiveIconParent.parentElement.querySelector('.active-inactive');


        off_icon.style.display = "block";
        eachActiveIcon.style.display = "none";
        active_inactive_mode.innerText = "Inactive";
        active_inactive_mode.style.color = "#FF0000";
    })
});

inactiveIcon.forEach( eachInactiveIcon => {
    eachInactiveIcon.addEventListener( 'click', () => {
        let eachInactiveIconParent = eachInactiveIcon.parentElement;
        let on_icon = eachInactiveIconParent.querySelector('#active-icon');
        let active_inactive_mode = eachInactiveIconParent.parentElement.querySelector('.active-inactive');

        on_icon.style.display = "block";
        eachInactiveIcon.style.display = "none";
        active_inactive_mode.innerText = "Active";
        active_inactive_mode.style.color = "#029C2D";

    })
})
