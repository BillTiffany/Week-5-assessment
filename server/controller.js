const affirmation = require('./db.json')
let globalId = 6

module.exports = {
    getAffirmation: (req,res) =>{
        res.status(200).send(affirmation)
        // console.log(affirmation)
    },
    deleteAffirmation: (req,res) => {
        const {id} = req.params
        let index = affirmation.findIndex(elem => elem.id === +req.params.id)
        affirmation.splice(index, 1)
        res.status(200).send(affirmation)
    },
        
    createAffirmation: (req,res) => {const {feeling, proud, imageURL} =req.body
    const newAffirmation = {
        id: globalId,
        feeling,
        proud,
        imageURL
    }

    affirmation.push(newAffirmation)
    // console.log(affirmation)
    res.status(200).send(affirmation)
    globalId++
    },
        updateAffirmation: (req,res) => {
            const {id} = req.params
            const {type} = req.body

            let index = affirmation.findIndex((elem) => +elem.id=== +id)
    if(type === 'plus'){
        affirmation[index].price += 10000
        res.status(200).send(affirmation)
    }else if(affirmation[index].price < 10000 && type === 'minus'){
        affirmation[index].price = 0
        res.status(200).send(affirmation)
    }else if(type === 'minus'){
        affirmation[index].price -= 10000
        res.status(200).send(affirmation)
    }else {
        res.status(400).send("you broke it Cartman")
    }
    }
}
