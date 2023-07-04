const year: HTMLElement | null = document.getElementById('year')
const getYear = new Date().getFullYear()
const thisYear:string = getYear.toString()
if(year) {
  year.setAttribute("datetime", thisYear)
  year.textContent = thisYear
} 