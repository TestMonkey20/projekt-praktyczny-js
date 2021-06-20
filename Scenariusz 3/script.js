class Product {
    constructor(n,c,v,q,d) {
        this.n = n;
        this.c = c;
        this.v = v;
        this.q = q;
        this.d = d;
    }
}

let iname = ""
let icategory = ""
let ivalue = ""
let iquantity = ""
let ides = ""
let edit = ""
let l = localStorage.length


let value = -1
let display = 0
let up = -1

while(display<localStorage.length){
up++
let s = JSON.parse(localStorage.getItem("Product" + up))



  iname += `<li>${s.n}</li>`
  document.getElementById('iname').innerHTML = iname

  icategory += `<li>${s.c}</li>`
  document.getElementById('icategory').innerHTML = icategory

  ivalue += `<li>${s.v}</li>`
  document.getElementById('ivalue').innerHTML = ivalue

  iquantity += `<li>${s.q}</li>`
  document.getElementById('iquantity').innerHTML = iquantity

  ides += `<li>${s.d}  </li> `
  document.getElementById('ides').innerHTML = ides

  edit += `<li><button id="delete${value}">usuń</button>  <button id="edition${value}">Edytuj</button> </li> `
  document.getElementById('edit').innerHTML = edit

display++

}


value+=up+1

btna.addEventListener('click', () =>{
  
  value ++
  

  const p1 = new Product(document.getElementById('name').value,
  document.getElementById('category').value,
  document.getElementById('value').value +"zł",
  document.getElementById('quantity').value,
  document.getElementById('des').value)
 

  localStorage.setItem('Product'+localStorage.length, JSON.stringify(p1));

  
  
  let j = JSON.parse(localStorage.getItem("Product" +value))

  
  iname += `<li>${j.n}</li>`
  document.getElementById('iname').innerHTML = iname

  icategory += `<li>${j.c}</li>`
  document.getElementById('icategory').innerHTML = icategory

  ivalue += `<li>${j.v}</li>`
  document.getElementById('ivalue').innerHTML = ivalue

  iquantity += `<li>${j.q}</li>`
  document.getElementById('iquantity').innerHTML = iquantity

  ides += `<li>${j.d}</li> `
  document.getElementById('ides').innerHTML = ides

  edit += `<li> <button id="delete${value}">usuń</button>  <button id="edition${value}">Edytuj</button>  </li> `
  document.getElementById('edit').innerHTML = edit

  console.log(ides)
  console.log(edit)

})


