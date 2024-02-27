const { Router } = require("express");

const router = Router()
console.log("🚀 ~ router:", router)

router.post('/send-email', (req, res) => {
    res.send('received')
})
module.exports = router
