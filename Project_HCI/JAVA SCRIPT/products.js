// Toggle clas active
const navbarNav = document.querySelector('.navbar-nav');

// When menu clicked
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// When outside menu clicked
const menulist = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});