module.exports = app => {
    app.route('/guitars')
        .post(app.api.guitar.save)
        .get(app.api.guitar.get)
}

