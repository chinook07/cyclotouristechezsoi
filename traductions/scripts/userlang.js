// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches(".boutondefilant")) {
        var myDropdown = document.getElementById("moncontenudefilant");
        if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
        }
    }
};

// Carroussel

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

// Traduction

function traduction() {
    $("#traductionNomSiteBoite").show();
}

function traductionBye() {
    $("#traductionNomSiteBoite").hide();
}

// Metric toggle

function toggleMeasure() {
    var temp = document.getElementsByClassName("tempMetric");
    var rain = document.getElementsByClassName("rainMetric");

    var toggleDescUS = document.getElementById("toggleDescUS");
    var toggleDescWorld = document.getElementById("toggleDescWorld");

    var toggleMetricInput = document.getElementById("toggleMetricInput");

    var metricInd = document.getElementsByClassName("metricInd");
    var uSInd = document.getElementsByClassName("uSInd");

    if (toggleMetricInput.className != "deselectionne") { // intl → américain

        toggleMetricInput.className = "deselectionne"

        for (var i = 0; i < temp.length; i++) {
            tempUSA = (parseInt(temp[i].textContent) * 1.8 + 32).toFixed(0);
            temp[i].innerHTML = tempUSA;
        }
        for (var j = 0; j < rain.length; j++) {
            rainUSA = (parseInt(rain[j].textContent) / 25.4).toFixed(1);
            rain[j].innerHTML = rainUSA;
        }

        toggleDescUS.className = "choisi";
        toggleDescWorld.className = "nonChoisi";

        for (var k = 0; k < metricInd.length; k++) {
            metricInd[k].style.display = "none"
        };
        for (var l = 0; l < uSInd.length; l++) {
            uSInd[l].style.display = "inline"
        };
        
    } else { // américain → international
        toggleMetricInput.className = ""

        for (var i = 0; i < temp.length; i++) {
            tempUSA = ((parseInt(temp[i].textContent) -32) / 1.8).toFixed(0);
            temp[i].innerHTML = tempUSA;
        }
        for (var j = 0; j < rain.length; j++) {
            rainUSA = (parseFloat(rain[j].textContent) * 25.4).toFixed(0);
            rain[j].innerHTML = rainUSA;
        }

        toggleDescUS.className = "nonChoisi";
        toggleDescWorld.className = "choisi";

        for (var k = 0; k < metricInd.length; k++) {
            metricInd[k].style.display = "inline"
        };
        for (var l = 0; l < uSInd.length; l++) {
            uSInd[l].style.display = "none"
        };

    };
}

function ouvrirville(evt, nomdelaville) {
    fermerville();
    $("#fermerville").css("display", "inline");

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nomdelaville).style.display = "block";
    evt.currentTarget.className += " active";
}

function fermerville() {
    var tablinks = document.getElementsByClassName("climattabliens");
    var tabcontent = document.getElementsByClassName("climattable");
    
    // Get all elements with class="tabcontent" and hide them
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    $("#fermerville").hide();
}

function ouvrirdesti(evt, nomdeladesti) {
    fermerdesti();

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nomdeladesti).style.display = "block";
    evt.currentTarget.className += " active";
}

function fermerdesti() {
    var tablinks = document.getElementsByClassName("destitabliens");
    var tabcontent = document.getElementsByClassName("destitable");

    // Get all elements with class="tabcontent" and hide them
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
}

function annee() {
    document.getElementById("anneeCourante").innerHTML = new Date().getFullYear();
}