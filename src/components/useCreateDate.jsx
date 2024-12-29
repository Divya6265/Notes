
const dateObj = new Date();
let monthName = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayName = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"];



 export const useCreateDateDetails = () => {

  let date = `${dayName[dateObj.getDay()]}, ${monthName[dateObj.getMonth()]} ${dateObj.getDate()} at ${dateObj.getHours()} : ${dateObj.getMinutes()}`;
    return date;
}
