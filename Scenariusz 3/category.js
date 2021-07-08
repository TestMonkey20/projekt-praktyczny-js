'use strict'

const handleDelete = (i) => {
	try {
		deleteCategory(i)
		updateCategory()
	}
	catch(err) {
		window.alert('Nie można usunąć Kategori dopóki istnieje produkt ją zawierający')
	}
}

const handleEdit = (i) => {
	const saveButtonHandle = document.getElementById('save-changes')
	const item = getStorageCategory()[i]
	const  {name, description} = item
	document.getElementById('modal-name').value = name
	document.getElementById('modal-description').value = description
	saveButtonHandle.onclick = () => handleSaveEdit(i)
	showEdit()
}

const handleSaveEdit = (i) => {
	const category = getStorageCategory()
	const item = category[i]
	item.name = document.getElementById('modal-name').value
	item.description = document.getElementById('modal-description').value
	setStorageCategory(category)
	updateCategory()
	hideEdit()
}

const updateCategory = () => {
	const tableBodyHandle = document.getElementById('table-body')
	const categoryArray = getStorageCategory()
	let td = ""
	for(const [index, category] of categoryArray.entries()){
		td += `<tr><td>${category.name}</td>
		<td>${category.description}</td>
		<td><button class="delete-btn" onclick="handleDelete(${index})">Delete</button>
		<button class="edit-btn" onclick="handleEdit(${index})">Edit</button><td>
		</tr>`
	}
	tableBodyHandle.innerHTML = td
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
const addbtn = document.getElementById('btna')

addbtn.addEventListener('click', () => {
	const name = document.getElementById('name').value
	const description = document.getElementById('description').value
	const category = new Category(name, description)
	pushCategory(category)
	updateCategory()
})

updateCategory()