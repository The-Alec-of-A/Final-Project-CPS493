const data = require("../data/posts.json")
const { connect } = require("./supabase")

const TABLE_NAME = 'Posts'

const isAdmin = true;

const BaseQuery = () => connect().from(TABLE_NAME)
                    .select('*')

async function getAll(limit = 30, offset = 0, sort = 'id', order = 'asc') {
    const list = await BaseQuery()
    .order(sort , {ascending: order === 'asc'})
    .range(offset, offset + limit - 1)
    if(list.error){
        throw list.error
    }
    return {
        items: list.data,
        total: list.count
    }
}

async function get(id) {
    const { data: item, error} = await connect().from(TABLE_NAME)
        .select('*').eq("id", id)
    if(error){
        throw error
    }
    return item[0]
}

async function search(query, limit = 30, offset = 0, sort = 'id', order = 'asc'){
    const { data: items, error, count } = await BaseQuery()
        .or(`user_Id.eq.${query}`)
        .order(sort, { ascending: order === 'asc' })
        .range(offset, offset + limit -1)
    if (error) {
        throw error
    }
    return items
}

async function create(post) {
    const { data: item, error} = await connect().from(TABLE_NAME).insert(post).select('*')
    if(error){
        throw error
    }
    return item
}

async function update(id, values) {
    const {data: item, error} = await connect().from(TABLE_NAME).update(values).eq('id', id).select('*')
        if (error){
            throw error
        }
    
        return item
}

async function remove(id) {
    const {data: item, error} = await connect().from(TABLE_NAME).delete().eq('id', id).select('*')
        if(error){
            throw error
        }
        return item
}

async function seed() {
    for(const item of data){

        const { data: newItem, error} = await connect().from(TABLE_NAME).insert(item).select('*')
        if(error){
            throw error
        }
    }
    return {message: "items seeded in DB"}
}

module.exports = {
    getAll,
    get,
    search,
    create,
    update,
    remove,
    seed
}