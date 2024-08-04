const submitbtn=document.querySelector("#submitbtn")
const search=document.querySelector("#cityname")
const output=document.querySelector("#city_name")
const result=document.querySelector(".result")
const day=document.querySelector("#day")
const tempstataus=document.querySelector("#tempstataus")
const datahide=document.querySelector(".temp")


const todate=document.querySelector(".todate")
const tomonth=document.querySelector(".tomonth")
const currdate=new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let dayy = weekday[currdate.getDay()];
 day.innerHTML=dayy
 todate.innerHTML=currdate.getDate()
 tomonth.innerHTML=month[currdate.getMonth()]

const clickbtn= async(even)=>{
 cityvalue=search.value
 even.preventDefault()
 if(cityvalue===""){
   output.innerHTML="Please Write the name before Search"
   datahide.classList.add("data-hide")

 }
 else{
  try{

   const api=`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=ea32c20f9afb9f7af470d42fa24bfda2`
   const response=await fetch(api)
   const data=await response.json()
   const arrdata=[data]
   const farenhite=arrdata[0].main.temp
   const cel=farenhite-273.15
   const roundedCel = Math.round(cel);
   result.innerHTML=`${roundedCel}`
   output.innerHTML=`${arrdata[0].name} , ${arrdata[0].sys.country}`
   const tempmood=arrdata[0].weather[0].main

   if(tempmood=="Clear"){
     tempstataus.innerHTML="<i class='fas fa-sun fa-2xl'></i>"
   }
   else if(tempmood=="Clouds"){
    tempstataus.innerHTML="<i class='fas fa-cloud fa-2xl'></i>"
  }
  else if(tempmood=="Rain"){
   tempstataus.innerHTML="<i class='fas fa-cloud-rain fa-2xl'></i>"
 }
 else{
  tempstataus.innerHTML="<i class='fas fa-cloud fa-2xl'></i>"
 }
 datahide.classList.remove("data-hide")

  }
  catch{
   output.innerHTML="Please Enter The city name properly"
  }

 }


}
submitbtn.addEventListener("click",clickbtn)


