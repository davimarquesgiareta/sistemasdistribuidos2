module.exports = app => {

//const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation 

    const save = async (request, response) => {
        try{
            const params = request
            const created = await app.db('guitars').insert({...params.body, price: Number(params.body.price)})
            
            response.status(200).json(created)
        } catch(e) {
            console.log(e)
        }

    }

    const get = (req, res) => {
        app.db('guitars')
            .select('id','brands','type','price')
            .then(guitars => res.json(guitars))
            .catch(err => res.status(500).send(err))
    }


    return {save, get}
}