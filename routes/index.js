const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require("../models")

const SALT_ROUNDS = 10

router.get('/registro', (req, res) =>
{
    res.render('register')
})

router.get('/inicio-sesion', (req, res) =>
{
    res.render('login')
})

router.post('/registro', async (req, res) =>
{
    let email = req.body.email
    let name = req.body.name
    let lastname = req.body.lastname
    let password = req.body.password

    let persistedUser = await models.User.findOne(
        {
            where:
            {
                email: email
            }
        }
    )

    if(persistedUser == null)
    {
        bcrypt.hash(password, SALT_ROUNDS, async (error, hash) =>
        {
            if(error)
            {
                res.render('/register', {message: "Error al registrar al usuario"})

            } else {

                let user = models.User.build(
                    {
                        email: email,
                        name: name,
                        lastname: lastname,
                        password: hash
                    }
                )

                let savedUser = await user.save()

                if(savedUser != null)
                {
                    res.redirect('/inicio-sesion')

                } else {

                    res.render('register', {message: "El usuario ya está registrado"})
                }
            }
        })

    } else {

        res.render('register', {message: "El usuario ya está registrado"})
    }

})

router.post('/inicio-sesion', async (req, res) =>
{
    let email = req.body.email
    let password = req.body.password

    let user = await models.User.findOne(
        {
            where:
            {
                email: email
            }
        }
    )

    if(user != null)
    {
        bcrypt.compare(password, user.password, (error, result) =>
        {
            if(result)
            {
                if(req.session)
                {
                    req.session.user = {

                        userId: user.id
                    }

                    res.redirect('/cuentas')
                }
            } else {

                res.render('login', {message: "Contraseña o correo incorrecto"})
            }
        })
    } else {

        res.render('login', {message: "Contraseña o correo incorrecto"})
    }
})

module.exports = router