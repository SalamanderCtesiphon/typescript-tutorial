"use strict";
const year = document.getElementById('year');
const getYear = new Date().getFullYear();
const thisYear = getYear.toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
