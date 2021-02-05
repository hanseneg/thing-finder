const express = require('express')
const inventoryRouter = express.Router()

const inventory = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

inventoryRouter.route('/')
    //get all
    .get((req, res) => {
        res.send(inventory)
    })
    //post a new item
    .post((req, res) => {
        const newInventory = req.body
        inventory.push(newInventory)
        res.send(`Successfully added ${newInventory.name} to the inventory data base.`)
    })

//get one by name
inventoryRouter.get('/:name', (req, res) => {
    const inventoryName = req.params.name
    const foundName = inventory.find(name => name.name === inventoryName)
    res.send(foundName)
})

//get by type
inventoryRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredInventory = inventory.filter(item => item.type === type)
    res.send(filteredInventory)
})

module.exports = inventoryRouter