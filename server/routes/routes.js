import express from "express";

const router = express.Router();

import convert from "../api/controller/convert.js";

router.get("/convert", (req, res) => {
    convert(req.query.from, req.query.to)
        .then((success) => {
            res.status(200).send(success);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

export default router;
