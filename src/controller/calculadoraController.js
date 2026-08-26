import { Router } from "express";

const endpoints = Router();

endpoints.get('/calculadora/somar', (req, resp) => {

    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);

    let soma = n1 + n2;

    resp.send({

        soma: soma

    })

})

endpoints.get('/calculadora/subtração', (req, resp) => {

    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);

    let sub = n1 - n2;

    resp.send({

        resultado: sub

    })

})

endpoints.get('/calculadora/multiplicar', (req, resp) => {

    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);

    let mult = n1 * n2;

    resp.send({

        resposta: mult

    })

})

export default endpoints;