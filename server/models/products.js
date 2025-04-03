const data = require('../data/products.json');
const { contentError, statusCodes, CustomError} = require('..//models/errors')
const isAdmin = true

async function getAll(){
    return data
}

async function get(){
    const item = data.items.find(item => item.id === id)
    if (!item) {
        throw new Error('Item not found', { status: 404 })
    }
    
    return item
}

async function create(item){
    if (!isAdmin) {
        throw CustomError('Sorry, you are not authorized to create a new item', statusCodes.UNAUTHORIZED)
    }
    const newItem = {
        id: data.length + 1,
        ...item
    }
    data.push(newItem)
    return newItem
}

async function update(id, item){
    const index = data.items.findIndex(item => item.id === id)
    if (index === -1) {
        return null
    }
    const updateItem = {
        ...data[index],
        ...item
    }
    data[index] = updatedItem
    return updatedItem

}

async function remove(id){
    const index = data.items.findIndex(item => item.id == id)
    if (index === -1) {
        return null
    }
    const deletedItem = data.items[index]
    data.items.splice(index, 1)
    return deletedItem
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}