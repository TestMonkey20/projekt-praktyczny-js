



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const day = urlParams.get('day')


const month = urlParams.get('Month')


const year = urlParams.get('Year')


document.querySelector('.reservday').innerHTML = day+`.`+month+`.`+year

const btn = document.getElementById('submit')


let calendar = []



btn.addEventListener('click', function(){

    let calendar = {
        day: day,
        month: month,
        year: year,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        phone: document.getElementById('phone').value,
        time: document.getElementById('time').value 
    }


    let dontsave = false

     for(let i = 0 ; i<localStorage.length; i++){
        let tempArr = []
        tempArr = JSON.parse(localStorage.getItem(localStorage.key(i)));
        
        

        if(tempArr.time==calendar.time 
           && tempArr.day==calendar.day
           && tempArr.month==calendar.month
           && tempArr.year==calendar.year){
            dontsave = true
            alert('proszę wybrać inny termin, termin zajęty')
        }
    }
        if(!dontsave){
        localStorage.setItem('Klient'+localStorage.length, JSON.stringify(calendar));
        alert('Wizyta została zapisana!')}


   location.reload()
})
 


