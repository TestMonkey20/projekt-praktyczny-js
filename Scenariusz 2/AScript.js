

const date = new Date();

const render = () =>{
    
const monthDays = document.querySelector('.days')

date.setDate(1)

const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate()

const prevlastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate()

let firstDay = date.getDay() 


let year = date.getFullYear();

const months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    "Maj",
    "Czerwiec",
    "Lipiec",
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
]

document.querySelector('.month').innerHTML = months[date.getMonth()]

document.querySelector('.date').innerHTML = year

let days = ""



if(firstDay==0) {
    firstDay = 7
}

for(let x = firstDay -1 ; x>0; x--){
    days += `<div class="prev"></div>`
}



for(let i = 1; i<=lastDay; i++){
    days += `<div onclick="redirect(${i},${year},'${date.getMonth()+1}')">${i}</div>`
    monthDays.innerHTML = days


}


}

document.querySelector('.back').addEventListener('click',() =>{
    date.setMonth(date.getMonth()-1)
    render()
})
document.querySelector('.forward').addEventListener('click',() =>{
    date.setMonth(date.getMonth()+1)

    render()
})


render()

function redirect(a,b,c ){
    console.log(+ a +` ` +b + ` ` +c)
    window.open('reservation.html?day=' +a +`&Month=`+ c +`&Year=` + b)
}