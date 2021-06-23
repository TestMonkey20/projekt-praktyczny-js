class Product {
  constructor(name, category, value, quantity, description) {
    this.name = name;
    this.category = category;
    this.value = value;
    this.quantity = quantity;
    this.description = description;
  }
}

const setLocalStorageArray = (productArray) => {
  localStorage.setItem('products', JSON.stringify(productArray) )
}

const getLocalStorageArray = () => {
  return JSON.parse(localStorage.getItem('products'))
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
  setLocalStorageArray(productArray)
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
  setLocalStorageArray(productArray)
}

const handleDelete = (i) => {
  deleteProduct(i)
  updateProducts()
}

const updateProducts = () => {
  const tableBodyHandler = document.getElementById('table-body')

  const productArray = getLocalStorageArray()
  let td = ""
  for(let i = 0; i<productArray.length; i++){
    td += `<tr><td>${productArray[i].name}</td>
    <td>${productArray[i].category}</td>
    <td>${productArray[i].value}</td>
    <td>${productArray[i].quantity}</td>
    <td>${productArray[i].description}</td>
    <td><button onclick="handleDelete(${i})">Delete</button><button>Edit</button><td>
    </tr>`  
  }
  tableBodyHandler.innerHTML = td
}


const addbtn = document.querySelector('.addbtn')

addbtn.addEventListener('click', () => {

  const name = document.getElementById('name').value
  const category = document.getElementById('category').value
  const value = document.getElementById('value').value
  const quantity = document.getElementById('quantity').value
  const des = document.getElementById('description').value
  const product = new Product(name, category, value, quantity, des)

  pushProduct(product)

  updateProducts()
})

updateProducts()