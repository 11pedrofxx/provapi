import { Router } from "express";

const endpoints = Router();

endpoints.get('/pt1', (req, resp) => {

    let entrada = req.query.entrada;
    let total = Number(req.query.total);

    if (entrada === 'Meia') {

        let valor = total * 14.25;
        resp.send({

            Total: valor

        })
    }


    else if (entrada === 'Inteira') {

        let valor = total * 28.50;

         resp.send({

            Total: valor

        })
    }

})


endpoints.get ('/farol', (req, resp) => {

    let farol = req.query.farol;

    if (farol === 'Verde') {

        resp.send({

            acao: 'Pode atravessar'

        })

    }

    
    else if (farol === 'Vermelho') {

        resp.send({

            acao: 'Não pode atravessar'

        })

    }

    
    else if (farol === 'Amarelo') {

        resp.send({

            acao: 'Olhe para os dois lados e preste atenção'

        })
    }


})   

endpoints.get ('/controlador', (req, resp) => {

    let ganhos = Number(req.query.ganhos);
    let gastos = Number(req.query.gastos);

    if (ganhos > gastos) {

        resp.send({

            situacao: 'Voce está dentro do orçamento'

        })

    }

    
    else if (ganhos < gastos) {

        resp.send({

            situacao: 'Pare de gastar, vc está fora do orçamento'

        })

    }

    
    if (ganhos == gastos) {

        resp.send({

            situacao: 'Vc está no limite, nn gaste mais'

        })

    }




})


export default endpoints;