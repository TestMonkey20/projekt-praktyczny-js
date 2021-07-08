const handleDelete = (i) => {
	deleteProduct(i)
	updateProducts()
}

const handleEdit = (i) => {
	const saveButtonHandle = document.getElementById('save-changes')
	const item = getStorageProducts()[i]
	const  {name, category, value, quantity, description} = item
	document.getElementById('modal-name').value = name
	document.getElementById('modal-category').value = category
	document.getElementById('modal-value').value = value
	document.getElementById('modal-quantity').value = quantity
	document.getElementById('modal-description').value = description
	saveButtonHandle.onclick = () => handleSaveEdit(i)
	showEdit()
}

const handleSaveEdit = (i) => {
	const products = getStorageProducts()
	const item = products[i]
	item.name = document.getElementById('modal-name').value
	item.category = document.getElementById('modal-category').value
	item.value = document.getElementById('modal-value').value
	item.quantity = document.getElementById('modal-quantity').value
	item.description = document.getElementById('modal-description').value
	setStorageProducts(products)
	updateProducts()
	hideEdit()
}

const updateProducts = () => {
	const tableBodyHandler = document.getElementById('table-body')
	const productArray = getStorageProducts()
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