function time(){
    let time= new Date()
    let dayYear= time.toLocaleDateString()
    let timeHours=time.getHours()
    let timeMinutes=time.getMinutes()
    let timeSeconds=time.getSeconds()
console.log("is working")
    let allTime=timeHours+":"+timeMinutes+":"+timeSeconds
    document.getElementById("idDay").textContent=dayYear
    document.getElementById("idTime").textContent=allTime
}
function multiplication(){
    let firstDate=document.getElementById("primerDato").value
    let secondDate=document.getElementById("segundoDato").value
    let answer=firstDate*secondDate

    document.getElementById("store").textContent=answer
}
//setInterval(time, 1000)