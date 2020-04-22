var express = require('express');
var router = express.Router();

/**variables */
let alamcen = [
    {
        id: 'A0001',
        codigo:'P-H-CRE-MC-J',
        producto:'pantalon',
        genero:'hombre',
        marca: 'cresspo',
        modelo:'coreano',
        tipo: 'jeans',        
        stock: 15,
        colores: 'todos',
        precio: 95.50,
        descripcion: 'Pantalon cresspo, modelo slim(delgado), de varios colores, tela jeans',
        
    },
    {
        id: 'A0002',        
        codigo:'P-H-CYE-PN-TD',
        producto:'pantalon',
        genero:'hombre',
        marca: 'CYZ conyuzeo',
        modelo:'nacional',
        tipo: 'drill',        
        stock: 12,
        colores: 'todos',
        precio: 135.00,
        descripcion: 'Pantalon CYZ- tela drill-bolsillo ciego con tapa-modelo skater- bota pie pretinado-cintira pretinado',
        
    },
    {
        id: 'A0003',        
        codigo:' P-H-H-PC-T',
        producto:'pantalon',
        genero:'hombre',
        marca: 'Hongdoushan',
        modelo:'coreano',
        tipo: 'tela',        
        stock: 15,
        colores: 'todos',
        precio: 95.50,
        descripcion: 'Pantalon Hongdoushan, tela, semi pitillo,bolsillo ciergo, modelo clasico',
    }
]

/* GET alamcen page. */
router.get('/', function (req, res, next) {
    res.render('almacen', { title: 'almacenExpress', datosproducto:alamcen});
});
module.exports = router;
