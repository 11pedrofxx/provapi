import Calculadora from './controller/calculadoraController.js'
import Health from './controller/healthController.js'
import Parteum from './controller/pt1Controller.js'
import Partedois from './controller/pt2Controller.js'
import Partetres from './controller/pt3Controller.js'


export function addRoutes(api) {

    api.use(Calculadora);
    api.use(Health);
    api.use(Parteum);
    api.use(Partedois);
    api.use(Partetres);

}