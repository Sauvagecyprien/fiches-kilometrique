var models = require('../models');



exports.list = async function (req, res){
      const entites = await models.Trajet.findAll();

    console.log("All users:", JSON.stringify(entites, null, 2));
    var test = entites;
    res.render('homepage/trajet', { layout: 'layout-template.ejs', test : test, active: 'trajet' });
}

exports.delete = async function (req, res){

// Now this entry was removed from the database
//     try {
    const id = req.params.id

    const jane = await models.Trajet.findByPk(id);
    console.log('valeur de jane :',JSON.stringify(jane, null, 2));
    await jane.destroy();
    res.status(200).render(res.redirect('/trajet'))



}

exports.create = async function (req, res){

    const {
        id_vehicules,
        date,
        trajet_start,
        trajet_end,
        commentaire,
        type_deplacement
    } = req.body
    try {
        const user = await models.Trajet.create({
            id_vehicules,
            date,
            trajet_start,
            trajet_end,
            commentaire,
            type_deplacement
        })
        res.status(201).render(res.redirect('/trajet'))

    } catch (error) {
        res.status(400).json({
            result: "error"
        })
    }



}



