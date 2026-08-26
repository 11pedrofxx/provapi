import { Router } from "express";

const endpoints = Router();

endpoints.get('/contador', (req, resp) => {

    let limite = Number(req.query.limite);
    let contador = 0

    while (contador < limite) {

        contador++

    }

        resp.send({

            contador: contador

        })

})

endpoints.get('/contador/reverso', (req, resp) => {

    let limite = Number(req.query.limite);
    let contador = 1

    while (contador > limite) {

        contador++

    }

 resp.send({

            contador: contador

        })

})

endpoints.get('/contador/cont', (req, resp) => {

    let comeco = Number(req.query.comeco);
    let fim = Number(req.query.fim)

   while (comeco < fim) {

    comeco ++
   

   }

    resp.send({

        contagem: comeco

    })

})


export default endpoints;