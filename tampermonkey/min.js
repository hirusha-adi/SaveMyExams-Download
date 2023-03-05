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

(function () { "use strict"; document.getElementById("sme-main-nav").remove(), document.querySelectorAll(".resource-actions.revision-notes.row.align-items-center").forEach((e => { e.remove() })), document.querySelectorAll(".resource-page-buttons").forEach((e => { e.remove() })), document.querySelectorAll(".resource-author").forEach((e => { e.remove() })), document.querySelectorAll(".container-fluid.main-footer").forEach((e => { e.remove() })), document.querySelectorAll(".download-pdf-ribbon").forEach((e => { e.remove() })), document.querySelectorAll(".col-md-4").forEach((e => { e.remove() })), document.querySelectorAll("#sme-countdown-banner").forEach((e => { e.remove() })), document.querySelectorAll(".button-0-3-5.button-d1-0-3-15").forEach((e => { e.remove() })), document.querySelectorAll(".button-0-3-5.button-d1-0-3-15")[0].remove() })();
