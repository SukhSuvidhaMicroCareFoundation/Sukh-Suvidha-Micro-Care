// Smooth scrolling for website navigation

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Simple welcome message in browser console

console.log(
    "Welcome to Sukh Suvidha Micro Care Foundation"
);
