class Product {
    constructor(name, category, value, quantity, description) {
        this.name = name;
        this.category = category;
        this.value = value;
        this.quantity = quantity;
        this.description = description;
    }
}


/**
 * Dodaje produkt do tablicy
 * @param {} product 
 */
const pushProduct = (product) => {
  const klucz = localStorage.getItem('products')

  if(klucz === null) {
    localStorage.setItem('products', '[]')
  }

  let productArray = JSON.parse(klucz)
  productArray.push(product)
  localStorage.setItem('products', JSON.stringify(productArray))
}


/**
 * Usuwa produkt z local storage
 * @param {} index 
 */
const deleteProduct = (index) => {
    const klucz = localStorage.getItem('products')

  if(klucz === null) {
    return
  }

  let productArray = JSON.parse(klucz)
  productArray.splice(index, 1)
  localStorage.setItem('products', JSON.stringify(productArray))
}

const displayProduct = () => {
  document.getElementById('iname')
  document.getElementById('icategory')
  document.getElementById('ivalue')
  document.getElementById('iquantity')
  document.getElementById('ides')
}


const addbtn = document.querySelector('.addbtn')

addbtn.addEventListener('click', () => {

  const name = document.getElementById('name').value
  const category = document.getElementById('category').value
  const value = document.getElementById('value').value
  const quantity = document.getElementById('quantity').value
  const des = document.getElementById('des').value
  const product = new Product(name, category, value, quantity, des)


  pushProduct(product)
})

