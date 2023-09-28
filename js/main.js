const productos = [
    {   
        imagen: 'images/zapatillas/botas.jpg',
        nombre: 'Vector',
        descripcion: 'Botas de hombre',
        precio: 97375,
        categoria: {
            nombre: 'zapatillas',
            id: "zapatillas"
        },
    },
    {
        imagen:'images/zapatillas/botas2.jpg',
        nombre : 'Wildo',
        descripcion: 'Zapatillas de hombre',
        precio: 74875,
        categoria: {
            nombre: 'zapatillas',
            id: "zapatillas"
        },
    },
    {
        imagen: 'images/zapatillas/botas3.jpg',
        nombre: 'Bleeker',
        descripcion: 'Botas de hombre',
        precio: 95600,
        categoria: {
            nombre: 'zapatillas',
            id: "zapatillas"
        },
    },
    {
        imagen: 'images/zapatillas/botas4.jpg',
        nombre: 'Vertic',
        descripcion: 'Botas de mujer',
        precio: 84300,
        categoria: {
            nombre: 'zapatillas',
            id: "zapatillas"
        },
    },
    {
        imagen: 'images/camperas/campera.jpg',
        nombre: 'Lars',
        descripcion: "Campera de hombre",
        precio: 144500,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/campera2.jpg',
        nombre: 'Neegan con capucha',
        descripcion: 'Campera impermeable unisex',
        precio: 216000,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/campera3.jpg',
        nombre: 'Darius',
        descripcion: 'Campera de hombre',
        precio: 223850,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/campera4.jpg',
        nombre: 'Ane',
        descripcion:'Campera de mujer',
        precio: 98200,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/campera5.jpg',
        nombre: 'Kelly',
        descripcion: 'Campera micropolar de mujer',
        precio: 45500,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/zapatillas/zapatillas.jpg',
        nombre: 'Wildo',
        descripcion:'Zapatillas de mujer',
        precio: 74850,
        categoria: {
            nombre: 'zapatillas',
            id: "zapatillas"
        },
    },
    {
        imagen: 'images/pantalones/pantalon.jpg',
        nombre: 'Noami',
        descripcion: 'Pantalón interior térmico de mujer',
        precio: 19000,
        categoria: {
            nombre: 'pantalones',
            id: "pantalones"
        },
    },
    {
        imagen: 'images/camperas/rompeviento.jpg',
        nombre: 'Davos',
        descripcion: 'Rompeviento',
        precio: 85000,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/buzo.jpg',
        nombre: 'Skyler',
        descripcion: 'Buzo micropolar de hombre',
        precio: 39000,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/campera-vayne.jpg',
        nombre: 'Vayne',
        descripcion: 'Campera de mujer',
        precio: 221520,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/campera6.jpg',
        nombre: 'Ava',
        descripcion: 'Campera de mujer',
        precio: 44150,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/camperas/campera7.jpg',
        nombre: 'Malik',
        descripcion: 'Campera de mujer',
        precio: 147500,
        categoria: {
            nombre: 'camperas',
            id: "camperas"
        },
    },
    {
        imagen: 'images/mochilas/mochilas1.jpg',
        nombre: 'Avery 6 LTS',
        descripcion: 'Mochila',
        precio: 27000,
        categoria: {
            nombre: 'mochilas',
            id: "mochilas"
        },
    },
    {
        imagen: 'images/mochilas/mochilas2.jpg',
        nombre: 'Ender 10 LTS',
        descripcion: 'Mochila',
        precio: 23000,
        categoria: {
            nombre: 'mochilas',
            id: "mochilas"
        },
    },
    {
        imagen: 'images/mochilas/mochilas3.jpg',
        nombre: 'Signal Plus',
        descripcion: 'Riñonera',
        precio: 8500,
        categoria: {
            nombre: 'mochilas',
            id: "mochilas"
        },
    },
    {
        imagen: 'images/mochilas/mochilas4.jpg',
        nombre: 'Dunken 18 LTS',
        descripcion: 'Mochila',
        precio: 40000,
        categoria: {
            nombre: 'mochilas',
            id: "mochilas"
        },
    },
    {
        imagen: 'images/mochilas/mochilas5.jpg',
        nombre: 'Avant 35 LTS',
        descripcion: 'Mochila',
        precio: 105000,
        categoria: {
            nombre: 'mochilas',
            id: "mochilas"
        },
    },
    {
        imagen: 'images/mochilas/bolso.jpg',
        nombre: 'Benton 55 LTS',
        descripcion: 'Bolso',
        precio: 52500,
        categoria: {
            nombre: 'mochilas',
            id: "mochilas"
        },
    },
    {
        imagen: 'images/mochilas/cubre-mochila.jpg',
        nombre: 'Cubre mochila chico',
        descripcion: 'Mochila',
        precio: 9600,
        categoria: {
            nombre: 'mochilas',
            id: "mochilas"
        },
    },
    {
        imagen: 'images/pantalones/pantalon2.jpg',
        nombre: 'Kanpur',
        descripcion: 'Pantalon de hombre',
        precio: 25000,
        categoria: {
            nombre: 'pantalones',
            id: "pantalones"
        },
    },
    {
        imagen: 'images/pantalones/pantalon3.jpg',
        nombre: 'Dorian',
        descripcion: 'Pantalon de hombre',
        precio: 35500,
        categoria: {
            nombre: 'pantalones',
            id: "pantalones"
        },
    },
    {
        imagen: 'images/pantalones/pantalon4.jpg',
        nombre: 'Dhara',
        descripcion: 'Pantalon de mujer',
        precio: 25500,
        categoria: {
            nombre: 'pantalones',
            id: "pantalones"
        },
    },
    {
        imagen: 'images/carpas/bolsas.jpg',
        nombre: 'Tenorio Pro',
        descripcion: 'Bolsa de dormir',
        precio: 45500,
        categoria: {
            nombre: 'carpas',
            id: "carpas"
        },
    },
    {
        imagen: 'images/carpas/carpa.jpg',
        nombre: 'Abside Bahía',
        descripcion: 'Carpa',
        precio: 39000,
        categoria: {
            nombre: 'carpas',
            id: "carpas"
        },
    },
    {
        imagen: 'images/carpas/hamaca.jpg',
        nombre: 'Rest Net',
        descripcion: 'Hamaca',
        precio: 45000,
        categoria: {
            nombre: 'carpas',
            id: "carpas"
        },
    },
    {
        imagen: 'images/carpas/colchon.jpg',
        nombre: 'Colchón inflable',
        descripcion: 'Colchón de 1 plaza',
        precio: 15000,
        categoria: {
            nombre: 'carpas',
            id: "carpas"
        },
    },
    {
        imagen: 'images/carpas/colchon2.jpg',
        nombre: 'Colchón inflable',
        descripcion: 'Colchón de 2 plazas',
        precio: 25000,
        categoria: {
            nombre: 'carpas',
            id: "carpas"
        },
    },
    {
        imagen: 'images/carpas/carpa2.jpg',
        nombre: 'Atuel auto-armable 3P',
        descripcion: 'Carpa',
        precio: 75000,
        categoria: {
            nombre: 'carpas',
            id: "carpas"
        },
    },
    {
        imagen: 'images/carpas/aislante.jpg',
        nombre: 'Aislante Lock',
        descripcion: 'Carpa',
        precio: 6500,
        categoria: {
            nombre: 'carpas',
            id: "carpas"
        },
    },
    {
        imagen: 'images/accesorios/cuello.jpg',
        nombre: 'Headweare',
        descripcion: 'Cuello multifuncional',
        precio: 5500,
        categoria: {
            nombre: 'accesorios',
            id: "accesorios"
        },
    },
    {
        imagen: 'images/accesorios/guantes.jpg',
        nombre: 'Dagan',
        descripcion: 'Guantes',
        precio: 15000,
        categoria: {
            nombre: 'accesorios',
            id: "accesorios"
        },
    },
    {
        imagen: 'images/accesorios/guantes2.jpg',
        nombre: 'Milton Flex',
        descripcion: 'Guantes para la nieve',
        precio: 35250,
        categoria: {
            nombre: 'accesorios',
            id: "accesorios"
        },
    },
    {
        imagen: 'images/accesorios/botella.jpg',
        nombre: 'Botella de hidratación 980 ML',
        descripcion: 'Botella de hidratación',
        precio: 11000,
        categoria: {
            nombre: 'accesorios',
            id: "accesorios"
        },
    },

]