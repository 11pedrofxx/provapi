import { Router } from "express";

const endpoints = Router();

endpoints.post('/vetor', (req, resp) => {

    let array = req.body.array;
    resp.send({

        NumerosDigitados: array

    })

})

endpoints.post('/vetor/nomes', (req, resp) => {

    let array = req.body.array;
    resp.send({

        NomesDigitados: array

    })

})

endpoints.get('/vetor/tabuada', (req, resp) => {

    let tabuada = Number(req.query.tabuada);
    let cont = ''
    let tabu = []

    for (let i = 0; i <= 10; i++) {

         cont = i * tabuada;
         tabu.push(cont)

    }

    resp.send({

        tabu

    })
})


export default endpoints;