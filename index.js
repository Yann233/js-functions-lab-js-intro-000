//Write a function named happyHolidays. This function should not accept any parameters and should return the string "Happy holidays!".
function happyHolidays(){
  return "Happy holidays!";
}
//Write a function named happyHolidaysTo. This function should accept a parameter of the name of the person you want to wish happy holidays, and return the string `Happy holidays, ${name}!`
happyHolidaysTo('Yann')
function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
//Write a function named happyCustomHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. Order of parameters matters, so make sure to first pass in the holiday and then the name. This function should return the string `Happy ${holiday}, ${name}!`
function happyCustomHolidayTo(holiday,name){
  return `Happy ${holiday}`,${name}!`;
}
