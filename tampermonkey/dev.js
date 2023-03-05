// ==UserScript==
// @name         SaveMyExams Cleaner
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Remove unwanted components from SaveMyExams rivison notes
// @author       Hirusha Adikari
// @license        MIT License
// @match        https://www.savemyexams.co.uk
// @include        /^https:\/\/www.savemyexams.co.uk\/.*/
// ==/UserScript==


(function () {
    'use strict';

    /* 
    Header: <div>
    id="sme-main-nav"
    class="fixed-top main-nav-wrap"
    */
    var header = document.getElementById("sme-main-nav");
    header.remove()

    /*
    Resource Actions: <div>
    class="resource-actions revision-notes row align-items-center"
    */
    var actionsTop = document.querySelectorAll('.resource-actions.revision-notes.row.align-items-center');
    actionsTop.forEach((element) => {
        element.remove();
    });

    /*
    Resource Actions Bottom: <div>
    class="resource-page-buttons"
    */
    var actionsBottom = document.querySelectorAll('.resource-page-buttons');
    actionsBottom.forEach((element) => {
        element.remove();
    });

    /*
    Author Info: <div>
    class="resource-author"
    */
    var authorInfo = document.querySelectorAll('.resource-author');
    authorInfo.forEach((element) => {
        element.remove();
    });

    /*
    Footer: <div>
    class="container-fluid main-footer"
    */
    var footer = document.querySelectorAll('.container-fluid.main-footer');
    footer.forEach((element) => {
        element.remove();
    });

    /*
    Bottom Download PDF Bar: <div>
    class="download-pdf-ribbon"
    */
    var dlbar = document.querySelectorAll('.download-pdf-ribbon');
    dlbar.forEach((element) => {
        element.remove();
    });

    /*
    Side Bar Parent: <div>
    class="col-md-4"
    */
    var sidebar = document.querySelectorAll('.col-md-4');
    sidebar.forEach((element) => {
        element.remove();
    });

    /*
    Countdown: <div>
    id="sme-countdown-banner"
    */
    var countdown = document.querySelectorAll('#sme-countdown-banner');
    countdown.forEach((element) => {
        element.remove();
    });

    /*
    Feedback Button: <button>
    class="button-0-3-5 button-d1-0-3-15"
    */
    var feedback = document.querySelectorAll('.button-0-3-5.button-d1-0-3-15');
    feedback.forEach((element) => {
        element.remove();
    });

    /*
    Side Bar Child: <nav>
    class="resources-nav"
    */
    document.querySelectorAll('.button-0-3-5.button-d1-0-3-15')[0].remove()

})();


