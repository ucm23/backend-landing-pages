const { Router } = require("express");
const express = require('express');
const nodemailer = require('nodemailer');

const port = 587

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eziocano23@gmail.com',
        pass: 'brirqvryfqgdzxla'
    },
    host: "smtp.gmail.com",
    port,
    secure: true
});
const mailOptions = {
    from: '"Ulises Cano Martinez" <eziocano23@gmail.com>',
    to: 'li_ulisescm@unca.edu.mx',
    subject: 'Asunto del correo',
    text: 'Cuerpo del correo',
};

const router = Router()

router.post('/send-email', async (req, res) => {
    //res.send('received')

    const response = await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("🚀 ~ response ~ error:", error)
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Correo enviado: ' + info.response);
    });
    console.log("🚀 ~ response ~ response:", response)
})
module.exports = router
