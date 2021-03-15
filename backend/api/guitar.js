module.exports = app => {

//const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation 

    const save = (req, res) => {
        res.send("seria pra salvar usuarios")
    }

    const get = (req, res) => {
        app.db('guitars')
            .select('id','brands','type','price')
            .then(guitars => res.json(guitars))
            .catch(err => res.status(500).send(err))
    }


    return {save, get}
}