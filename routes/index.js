const express = require('express');
const router = express.Router();
const builder = require("../application/screenshot");

/* GET home page. */
router.get('/', async function (req, res, next) {
    res.render('index');
});

router.post("/", async function (req, res, next) {
    const type = req.body.type;
    const url = req.body.url;
    let fileName = req.body.filename || url.replace(/[^A-z0-9]+/g, '');
    res.set("Content-Disposition", "attachment;filename=\"" + fileName + "\"")
    try {
        switch (type) {
            case "pdf":
                res.contentType("application/pdf");
                res.send(await builder.buildPdf(url));
                break;
            case "jpeg":
            case "jpg":
                res.contentType("application/jpeg");
                res.send(await builder.buildJpg(url));
                break;
            default:
                res.json({error: true, code: 400, message: "Wrong type. Only pdf and jpg types are available"});
        }
    } catch (e) {
        res.json(
            {
                error: true,
                code: 500,
                message: process.env.DEBUG === true ? e.message : "Something went wrong"
            }
        )
    }

});

module.exports = router;
