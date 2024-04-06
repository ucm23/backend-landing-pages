const emial_first_contiar = require('./templates/CONTIAR-SEND-1');

const { Router } = require("express");
const express = require('express');

const nodemailer = require('nodemailer');
const emial_first_contiar_receveid = require('./templates/CONTIAR-SEND-2');

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
    const mailOptionsSend = {
        from: '"Contiar Soluciones" <grupo.cti.clients.reply@gmail.com>',
        to: [/*'guillerminasamano@yahoo.com.mx',*/'li_ulisescm@unca.edu.mx'/*, req?.body?.correo*/],
        subject: 'Correo enviado desde contiar-soluciones web',
        html: emial_first_contiar({ ...req?.body })
    };
    const mailOptionsReceived = {
        from: '"Contiar Soluciones" <grupo.cti.clients.reply@gmail.com>',
        to: [req?.body?.correo],
        subject: 'Solicitud de información desde CONTIAR SOLUCIONES web',
        html: emial_first_contiar_receveid({ ...req?.body })
    };
    try {
        const info = await transporter.sendMail(mailOptionsSend);
        const info_ = await transporter.sendMail(mailOptionsReceived);
        console.log('Correo enviado:', info.response);
        console.log('Correo enviado:', info_.response);
        return res.status(200).send('Correo enviado: ' + JSON.stringify(info) + JSON.stringify(info_));
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).send(error.toString());
    }
    //FROM node:18-alpine

})

module.exports = router
