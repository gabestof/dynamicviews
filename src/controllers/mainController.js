const controller = {
    index: (req, res) => {
        
        const productos = [{
            titulo: "Carpaccio fresco",
            descripcion: "Entrada de Carpaccio de salmón con cítricos",
            precio:"U$S 65.50"
        },
        {
            titulo: "Rissoto de berenjena",
            descripcion: "Rissoto de berenjena y queso de cabra",
            precio:"U$S 47.00"
        },
        {
            titulo: "Mousse de arroz",
            descripcion: "Mousse de arroz con leche y aroma de azahar",
            precio:"U$S 27.50"
        },
        {
            titulo: "Espárragos blancos",
            descripcion: "Espárragos blancos con vinagreta y jamón ibérico",
            precio:"U$S 37.50"
        },


        ]



        res.render("index", {productos: productos});
},

  detalleProducto: (req, res) => {
       
    const id = req.params.id;


    const platos = [{

        id: 1,
        titulo: "Carpaccio fresco",
        descripcion: "Entrada de Carpaccio de salmón con cítricos",
        precio:"U$S 65.50",
        imagen:"/images/Carpaccio-de-salmon.jpg" 
    },
    {
        id:2,
        titulo: "Rissoto de berenjena",
        descripcion: "Rissoto de berenjena y queso de cabra",
        precio:"U$S 47.00",
        imagen:"/images/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id: 3,
        titulo: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio:"U$S 27.50",
        imagen:"/images/Mousse-de-arroz-con-leche.jpg"
    },
    {
        id: 4,
        titulo: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta y jamón ibérico",
        precio:"U$S 37.50",
        imagen:"/images/esparragos.png"
    },
    ];

    const plato = platos.find(plato => plato.id == id);



    res.render("detalleMenu", {plato})
  }

}





module.exports = controller;



