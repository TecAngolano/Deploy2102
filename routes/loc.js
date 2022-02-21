module.exports = (app)=>{
    app.get('/4',(req,res)=>{
        res.render('pagina4.ejs')
    })

    app.get('/mapa',(req,res)=>{
        res.redirect('http://maps.google.com')
    })
}
