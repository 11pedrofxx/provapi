import { Router } from "express";

const endpoints = Router();

endpoints.get('/Health', (req, resp) => {

    resp.send({

        message: 'A API esta bem'

    })

})

export default endpoints;