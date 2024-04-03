const emial_first_contiar = require('./templates/CONTIAR-SEND-1');

const { Router } = require("express");
const express = require('express');

const nodemailer = require('nodemailer');

const port = 587



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'grupo.cti.clients.reply@gmail.com',
        pass: 'tavjmefmiugrlglc'
    },
    host: "smtp.gmail.com",
    port,
    secure: true
});

const router = Router()

router.post('/send-email', async (req, res) => {
    console.log("🚀 ~ router.post ~ req:", req?.body)
    console.log("🚀 ~ router.post ~ req:", req?.data)
    console.log("🚀 ~ router.post ~ req:", req?.payload)

    const {
        nombre, correo, telefono, mensaje
    } = req?.body;

    const mailOptions = {
        from: '"Grupo CTI" <grupo.cti.clients.reply@gmail.com>',
        to: ['li_ulisescm@unca.edu.mx', req?.body?.email],
        subject: 'Correo enviado desde contiar-soluciones web',
        html: emial_first_contiar({ nombre, correo, telefono, mensaje })
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
        return res.status(200).send('Correo enviado: ' + JSON.stringify(info));
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).send(error.toString());
    }

})

router.post('/send-contact-email-contiar', async (req, res) => {
    const mailOptions = {
        from: '"Grupo CTI" <grupo.cti.clients.reply@gmail.com>',
        to: ['guillerminasamano@yahoo.com.mx','li_ulisescm@unca.edu.mx', req?.body?.email],
        subject: 'Correo enviado desde contiar-soluciones web',
        html: emial_first_contiar({ ...req?.body })
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
        return res.status(200).send('Correo enviado: ' + JSON.stringify(info));
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).send(error.toString());
    }

})

module.exports = router
