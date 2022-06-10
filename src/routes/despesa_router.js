const User = require('../models/user')
const express = require('express')

const {
    user
} = require('pg/lib/defaults')

const router = express.Router()


router.get('/', async (req, res) => {

    User.findAll().then((users) => {
        res.render('pages/despesa/index', {
            users: users
        })
    })

})

router.get('/new', (req, res) => {
    res.render('pages/despesa/new', {
        user: null
    })
})

router.post('/new', (req, res) => {
    let name = req.body.name
    let valor = req.body.valor
    let tipoValor = req.body.tipoValor

    if(name != null || typeof valor == 'number' ){
        User.create({
            name: name,
            valor: valor,
            tipoValor: tipoValor
        })
        console.log(`valor ${valor} cadastrada com sucesso!`)
        res.redirect('/')
    }else{
        console.error("nome ou valor")
    }
})

router.get('/edit/:id', (req, res) => {

    User.findAll({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        console.log(user)
        res.render('pages/despesa/edit', {
            user: user[0].dataValues
        })
    })
})

router.post('/edit', (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let valor = req.body.valor
    let tipoValor = req.body.tipoValor

    User
        .update({
            name: name,
            valor: valor,
            tipoValor: tipoValor
        }, {
            where: {
                id: id
            }
        })
        .then(() => {
            console.log(`valor ${valor} atualizado com sucesso!`)
            res.redirect('/despesa')
        })
})
router.get('/delete/:id', (req, res) => {

    User.findAll({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        res.render('pages/despesa/delete', {
            user: user[0].dataValues
        })
    })
})

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id

    User.destroy({
        where: {
            id: id
        }
    }).then(() => {
        console.log(`Usuario com o id  ${id} excluido com sucesso!`)
        res.redirect('/despesa')
    })
})

module.exports = router