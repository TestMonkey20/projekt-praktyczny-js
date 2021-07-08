class Product {
	constructor(name, category, value, quantity, description) {
		this.name = name
		this.category = category
		this.value = value
		this.quantity = quantity
		this.description = description
	}
}

class Category {
	constructor(name, description) {
		this.name = name
		this.description = description
	}
}

const setStorageProducts = (productArray) => {
	localStorage.setItem('products', JSON.stringify(productArray) )
}

const getStorageProducts = () => {
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
	setStorageProducts(productArray)
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
	setStorageProducts(productArray)
}

if(getStorageProducts() === null){
	setStorageProducts([])
}
//////////////////////////////////////////////////////////////////////////////
const setStorageCategory = (categoryArray) => {
	localStorage.setItem('category', JSON.stringify(categoryArray) )
}

const getStorageCategory = () => {
	return JSON.parse(localStorage.getItem('category'))
}

const pushCategory = (category) => {
	const klucz = localStorage.getItem('category')
	if(klucz === null) {
		localStorage.setItem('category', '[]')
	}
	let categoryArray = JSON.parse(klucz)
	categoryArray.push(category)
	setStorageCategory(categoryArray)
}

const deleteCategory = (index) => {
	const klucz = localStorage.getItem('category')
	if(klucz === null) {
		return
	}
	let categoryArray = JSON.parse(klucz)
	categoryArray.splice(index, 1)
	setStorageCategory(categoryArray)
}

if(getStorageCategory() === null){
	setStorageCategory([])
}