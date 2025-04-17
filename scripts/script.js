document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop(); 
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); 
        } else {
            link.classList.remove("active"); 
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const reservations = document.querySelectorAll(".reserv1");

    function updateReservations() {
        const currentCategory = window.location.hash ? window.location.hash.substring(1) : "hotels-res";
        
        reservations.forEach(reservation => {
            if (reservation.id === currentCategory) {
                reservation.style.display = "flex";
            } else {
                reservation.style.display = "none";
            }
        });

        tabs.forEach(tab => {
            if (tab.getAttribute("href") === "#" + currentCategory) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
    }

    updateReservations();
    window.addEventListener("hashchange", updateReservations);
});


function tosignup(){
    window.location.href="signup.html";
}
document.addEventListener("DOMContentLoaded", function() {
    var Button = document.getElementById("getstarted");
    
    if (Button) {
        Button.addEventListener("click", tosignup);
    }
});

function toreserv(){
    window.location.href="acceuil.html#recommendations";
}
document.addEventListener("DOMContentLoaded", function() {
    var Button = document.getElementById("reserver");
    
    if (Button) {
        Button.addEventListener("click", toreserv);
    }
});

function tocontact(){
    window.location.href="contact.html#Contact";
}
document.addEventListener("DOMContentLoaded", function(){
    var Button = document.getElementById("Contacter");
    
    if (Button) {
        Button.addEventListener("click", tocontact);
    }
});

document.addEventListener("DOMContentLoaded", function(){
    var logout_btn = document.getElementById("logout-btn");
    var annuler = document.getElementById("annuler");
    var confirmer = document.getElementById("confirmer");
    var logout_card = document.querySelector(".logout-card");

    logout_btn.addEventListener("click", function(e){
        e.preventDefault();
        logout_card.style.display = "flex";
        
    });

    annuler.addEventListener("click", function(){
        logout_card.style.display = "none";
    });

    confirmer.addEventListener("click", function(){
        window.location.href = "logout.html";
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchBar");

    searchInput.addEventListener("input", function () {
      const filter = this.value.toLowerCase();
      const articles = document.querySelectorAll(".article1");

      articles.forEach(article => {
        const nameElement = article.querySelector(".name h5");
        const placeElement = article.querySelector(".name p");
        const name = nameElement.textContent.toLowerCase();
        const place = placeElement.textContent.toLowerCase();
        if(name.includes(filter) || place.includes(filter)){
          article.style.display = "";
        } 
        else{
          article.style.display = "none";
        }
      });
    });
  });