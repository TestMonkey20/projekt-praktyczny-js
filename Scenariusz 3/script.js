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

const handleEdit = (i) => {
	const saveButtonHandle = document.getElementById('save-changes')
	const item = getLocalStorageArray()[i]
	const  {name, category, value, quantity, description} = item
	document.getElementById('modal-name').value = name
	document.getElementById('modal-category').value = category
	document.getElementById('modal-value').value = value
	document.getElementById('modal-quantity').value = quantity
	document.getElementById('modal-description').value = description
	saveButtonHandle.onclick = () => handleSaveEdit(i)
	console.log(saveButtonHandle.onclick)

	showEdit()
}

const handleSaveEdit = (i) => {
	const products = getLocalStorageArray()
	const item = products[i]
	item.name = document.getElementById('modal-name').value
	item.category = document.getElementById('modal-category').value
	item.value = document.getElementById('modal-value').value
	item.quantity = document.getElementById('modal-quantity').value
	item.description = document.getElementById('modal-description').value
	
	setLocalStorageArray(products)
	updateProducts()
	hideEdit()
}

const updateProducts = () => {
	const tableBodyHandler = document.getElementById('table-body')

	const productArray = getLocalStorageArray()
	let td = ""
	for(const [index, product] of productArray.entries()){
		td += `<tr><td>${product.name}</td>
		<td>${product.category}</td>
		<td>${product.value}</td>
		<td>${product.quantity}</td>
		<td>${product.description}</td>
		<td><button onclick="handleDelete(${index})">Delete</button>
		<button onclick="handleEdit(${index})">Edit</button><td>
		</tr>`
	}
	tableBodyHandler.innerHTML = td
}



const showEdit = () => {
	const modalHandle = document.getElementById('modal')
	modalHandle.classList.add('modal-visible')
}

const hideEdit = () => {
	const modalHandle = document.getElementById('modal')
	modalHandle.classList.remove('modal-visible')
}


////////////////////////////////////////////////////////////////////////////////
const addbtn = document.querySelector('.addbtn')

addbtn.addEventListener('click', () => {
	const name = document.getElementById('name').value
	const category = document.getElementById('category').value
	const value = document.getElementById('value').value
	const quantity = document.getElementById('quantity').value
	const description = document.getElementById('description').value
	const product = new Product(name, category, value, quantity, description)

	pushProduct(product)
	updateProducts()
})



updateProducts()