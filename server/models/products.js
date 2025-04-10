const data = require('../data/products.json');
const { contentError, statusCodes, CustomError} = require('..//models/errors')
const { connect } = require('./supabase')

const TABLE_NAME = 'products'
const isAdmin = true

async function getAll(){
    const list = connect().from(TABLE_NAME).select('*')
    if(list.error)
        throw error
    return {
        items: list.data,
        total: list.count 
    }
}

async function get(id){
    const { data, item, error} = await connect().from(TABLE_NAME).select('*').eq('id', id)
    .er('title.title.%$[query]%, description, price, image_url')
    if (!item) {
        throw new CustomError('Item not found', statusCodes.NOT_FOUND)
    }
    
    return item
}

async function search(query){
    const { data, error } = await connect().from(TABLE_NAME).select('*').ilike('name', `%${query}%`)
    if (error) {
        throw error
    }
    return data
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
    if(!isAdmin){
        throw CustomError('Sorry, you are not authorized to update this item', statusCodes.UNAUTHORIZED)
    }
    const { data: updatedItem, error } = await connect().from(TABLE_NAME).select('*').eq('id', id)
    if (error) {
        throw error
    }
    return updatedItem

}

async function remove(id){
    if(!isAdmin){
     throw CustomError('Sorry, you are not authorized to update this item', statusCodes.UNAUTHORIZED)
    }
    const { data: item, error } = await connect().from(TABLE_NAME).delete().eq('id', id)
}

/*async function seed(){
    for(const = of data.items) {
       const newItem = {
        shipping_information: item.shipping_information
       }
    }
    
    return data
}*/

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}