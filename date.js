exports.getdate=function(){
let today = new Date();
  let currentDay = today.getDay();


let options={
  weekday:"long",
  day:"numeric",
  month:"long"
};
return today.toLocaleDateString("en-us",options);
}
exports.getday=function(){
let today = new Date();
  let currentDay = today.getDay();


let options={
  weekday:"long"
};
return today.toLocaleDateString("en-us",options);
}
