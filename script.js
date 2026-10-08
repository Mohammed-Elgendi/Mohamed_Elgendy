/* =========================================
   AUTOMATION PORTFOLIO - JAVASCRIPT
========================================= */


/* =========================================
   CERTIFICATE LIGHTBOX
========================================= */

/*
   Open Certificate
*/

function openCertificate(imagePath) {

    const lightbox =
        document.getElementById("certificate-lightbox");

    const image =
        document.getElementById("certificate-image");


    // Safety check

    if (!lightbox || !image) {
        return;
    }


    // Set certificate image

    image.src = imagePath;


    // Show lightbox

    lightbox.classList.add("active");


    // Prevent background scrolling

    document.body.style.overflow = "hidden";

}


/*
   Close Certificate
*/

function closeCertificate() {

    const lightbox =
        document.getElementById("certificate-lightbox");

    const image =
        document.getElementById("certificate-image");


    // Safety check

    if (!lightbox || !image) {
        return;
    }


    // Hide lightbox

    lightbox.classList.remove("active");


    // Clear image

    image.src = "";


    // Restore background scrolling

    document.body.style.overflow = "";

}


/* =========================================
   CLOSE LIGHTBOX WHEN CLICKING OUTSIDE
========================================= */

const certificateLightbox =
    document.getElementById("certificate-lightbox");


if (certificateLightbox) {

    certificateLightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeCertificate();

            }

        }
    );

}


/* =========================================
   CLOSE LIGHTBOX WITH ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCertificate();

        }

    }
);