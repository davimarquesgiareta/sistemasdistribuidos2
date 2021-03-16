module.exports = app => {

//const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation 

    const save = async (request, response) => {
        const params = request

        console.log(params.body)
        // Example of request
        // {
        //     "brands": "arley",
        //     "type": "eletric",
        //     "price": 20000
        // }
        const created = await app.db('guitars').insert(params.body)

        response.status(200).json(created)
    }

    const get = (req, res) => {
        app.db('guitars')
            .select('id','brands','type','price')
            .then(guitars => res.json(guitars))
            .catch(err => res.status(500).send(err))
    }


    return {save, get}
}