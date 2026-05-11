function datos(){
    // CREAR UN ARRAY de objetos: usuarios---------------------------------------------
    var usuarios = [
        {
            idusuario: 1,
            cedula: "1234567",
            nombre: "ANGEL PEREIRA",
            celular: "0971-123456",
            usuario: "angel",
            contrasena: "angel123",
            rol: "ADMINISTRADOR"
        },
        {
            idusuario: 2,
            cedula: "223344",
            nombre: "JOSR DAVALOS",
            celular: "0971-001100",
            usuario: "jose",
            contrasena: "jose123",
            rol: "Vendedor"
        },
        {
            idusuario: 3,
            cedula: "556677",
            nombre: "SAMUEL PERALTA",
            celular: "0972-220022",
            usuario: "samuel",
            contrasena: "samuel123",
            rol: "Cajero"
        },
        {
            idusuario: 4,
            cedula: "6590456",
            nombre: "PEDRO QUINTANA",
            rol: "Cajero",
            usuario: "pedro",
            contrasena: "pedro123",
            celular: "0985455620"
        },
        {
            idusuario: 5,
            cedula: "4850123",
            nombre: "Maria Gimenez",
            rol: "Ventas",
            celular: "0981-555666",
            usuario: "MariaG",
            contrasena: "maria2026"
        },
        {
            idusuario: 6,
            cedula: "5980777",
            nombre: "Carlos Ferreira",
            rol: "Cajero",
            celular: "0994-112233",
            usuario: "Carlos",
            contrasena: "car12345"
        },
        {
            idusuario: 7,
            cedula: "3950444",
            nombre: "Elena Benitez",
            rol: "Administrador",
            celular: "0975-888999",
            usuario: "ElenaB",
            contrasena: "admin77"
        },
        {
            idusuario: 8,
            cedula: "6120888",
            nombre: "Jorge Ortiz",
            rol: "Deposito",
            celular: "0983-445566",
            usuario: "JorgeO",
            contrasena: "jorge_depo"
        },
        {
            idusuario: 9,
            cedula: "7430111",
            nombre: "Sofia Rojas",
            rol: "Ventas",
            celular: "0971-990011",
            usuario: "SofiaR",
            contrasena: "sofia987"
        },
        {
            idusuario: 10,
            cedula: "5210666",
            nombre: "Ricardo Galeano",
            rol: "Contador",
            celular: "0992-334455",
            usuario: "Ricardo",
            contrasena: "ricky2026"
        }
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // CREAR UN ARRAY de objetos: proveedores-----------------------------------------
    var proveedores = [
        {
            idproveedor: 1,
            ruc: "1234567-0",
            nombre:"Angel Escalante",
            razonsocial: "DISTRI NORTE S.R.L.",
            direccion: "AV. SIN NOMBRE C/PUNTAS DEL NORTE",
            telefono: "0331-123456",
            ciudad: "CONCEPCIÓN"
        },
        {
            idproveedor: 2,
            ruc: "5400300-1",
            nombre:"Luz Sanchez",
            razonsocial: "COMERCIAL LUZ S.A.",
            direccion: "ALEJO GARCÍA Y EUSEBIO AYALA",
            telefono: "0971-102030",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
            idproveedor: 3,
            ruc: "801234567-1",
            nombre:"Ignacio González",
            razonsocial: "INFORMÁTICA VIP",
            direccion: "AV. RODRIGUEZ DE FRANCIA 1050",
            telefono: "0981-302010",
            ciudad: "PEDRO JUAN CABALLERO"
        },
        {
            idproveedor: 4,
            ruc: "80022334-1",
            nombre: "TEXTIL GUAIREÑA S.A.",
            razonsocial: "TEXTIL GUAIREÑA S.A.",
            direccion: "AV. MARISCAL LÓPEZ ESQ. LIBERTAD",
            telefono: "021-550660",
            ciudad: "ASUNCIÓN"
        },
        {
            idproveedor: 5,
            ruc: "4850900-2",
            nombre: "MODAS DEL ESTE IMPORT-EXPORT",
            razonsocial: "MODAS DEL ESTE IMPORT-EXPORT",
            direccion: "AV. SAN BLAS KM 1.5",
            telefono: "0961-445500",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
            idproveedor: 6,
            ruc: "80011223-0",
            nombre: "BOUTIQUE MAYORISTA CONCEPCIÓN",
            razonsocial: "BOUTIQUE MAYORISTA CONCEPCIÓN",
            direccion: "CURUPAYTY C/ MCAL. ESTIGARRIBIA",
            telefono: "0331-240800",
            ciudad: "CONCEPCIÓN"
        },
        {
            idproveedor: 7,
            ruc: "5566443-8",
            nombre: "CALZADOS Y ACCESORIOS EL SOL",
            razonsocial: "CALZADOS Y ACCESORIOS EL SOL",
            direccion: "GRAL. ROA 415",
            telefono: "0982-304050",
            ciudad: "ENCARNACIÓN"
        },
        {
            idproveedor: 8,
            ruc: "80099887-5",
            nombre: "PROVEEDORA TEXTIL S.R.L.",
            razonsocial: "PROVEEDORA TEXTIL S.R.L.",
            direccion: "RUTA PY05 KM 2",
            telefono: "0331-242000",
            ciudad: "CONCEPCIÓN"
        },
        {
            idproveedor: 9,
            ruc: "1250600-4",
            nombre: "ALONDRA FASHION GROUP",
            razonsocial: "ALONDRA FASHION GROUP",
            direccion: "SHOPPING ZUNI LOCAL 12",
            telefono: "0973-112233",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
            idproveedor: 10,
            ruc: "80044556-9",
            nombre: "TELARES DEL SUR",
            razonsocial: "TELARES DEL SUR",
            direccion: "AV. IRRAZÁBAL ESQ. CABAÑAS",
            telefono: "071-205500",
            ciudad: "ENCARNACIÓN"
        }
    ];
    localStorage.setItem("proveedores", JSON.stringify(proveedores));

    // CREAR UN ARRAY de objetos: marcas----------------------------------------------
    var marcas = [
        {
            idmarca: 1,
            marca: "ZARA"
        },
        {
            idmarca: 2,
            marca: "NIKE"
        },
        {
            idmarca: 3,
            marca: "ADIDAS"
        },
        {
            idmarca: 4,
            marca: "LEVI'S"
        },
        {
            idmarca: 5,
            marca: "H&M"
        },
        {
            idmarca: 6,
            marca: "GUCCI"
        },
        {
            idmarca: 7,
            marca: "TOMMY HILFIGER"
        },
        {
            idmarca: 8,
            marca: "CALVIN KLEIN"
        },
        {
            idmarca: 9,
            marca: "PUMA"
        },
        {
            idmarca: 10,
            marca: "LACOSTE"
        },
        {
            idmarca: 11,
            marca: "DIESEL"
        },
        {
            idmarca: 12,
            marca: "COLUMBIA"
        },
        {
            idmarca: 13,
            marca: "UNDER ARMOUR"
        },
        {
            idmarca: 14,
            marca: "GUESS"
        },
        {
            idmarca: 15,
            marca: "FOREVER 21"
        }
    ];
    var clasificaciones = [
        {
            idclasificacion: 1,
            clasificacion: "REMERAS"
        },
        {
            idclasificacion: 2,
            clasificacion: "PANTALONES"
        },
        {
            idclasificacion: 3,
            clasificacion: "JEANS"
        },
        {
            idclasificacion: 4,
            clasificacion: "CAMISAS"
        },
        {
            idclasificacion: 5,
            clasificacion: "BLUSAS"
        },
        {
            idclasificacion: 6,
            clasificacion: "CAMPERAS"
        },
        {
            idclasificacion: 7,
            clasificacion: "VESTIDOS"
        },
        {
            idclasificacion: 8,
            clasificacion: "CALZADOS"
        },
        {
            idclasificacion: 9,
            clasificacion: "BERMUDAS"
        },
        {
            idclasificacion: 10,
            clasificacion: "SACOS"
        }
    ];

    var articulos = [
        {
        idarticulo: 1,
        codbarra: "7891011121314",
        descripcion: "REMERA ALGODÓN SLIM FIT",
        idmarca: 1,
        nom_marca: "ZARA",
        idclasificacion: 1,
        nom_clasificacion: "REMERAS",
        tiva: 10,
        stockactual: 50,
        preventa: 85000,
        costo: 50000
    },
    {
        idarticulo: 2,
        codbarra: "7891011121315",
        descripcion: "JEAN SKINNY BLUE DARK",
        idmarca: 4,
        nom_marca: "LEVI'S",
        idclasificacion: 3,
        nom_clasificacion: "JEANS",
        tiva: 10,
        stockactual: 30,
        preventa: 250000,
        costo: 350000
    },
    {
        idarticulo: 3,
        codbarra: "7891011121316",
        descripcion: "CAMISA FORMAL BLANCA",
        idmarca: 7,
        nom_marca: "TOMMY HILFIGER",
        idclasificacion: 4,
        nom_clasificacion: "CAMISAS",
        tiva: 10,
        stockactual: 25,
        preventa: 180000,
        costo: 120000
    },
    {
        idarticulo: 4,
        codbarra: "7891011121317",
        descripcion: "CAMPERA DE CUERO NEGRA",
        idmarca: 11,
        nom_marca: "DIESEL",
        idclasificacion: 6,
        nom_clasificacion: "CAMPERAS",
        tiva: 10,
        stockactual: 12,
        preventa: 450000,
        costo: 500000
    },
    {
        idarticulo: 5,
        codbarra: "7891011121318",
        descripcion: "VESTIDO DE FIESTA LARGO",
        idmarca: 14,
        nom_marca: "GUESS",
        idclasificacion: 7,
        nom_clasificacion: "VESTIDOS",
        tiva: 10,
        stockactual: 8,
        preventa: 380000,
        costo: 350000
    },
    {
        idarticulo: 6,
        codbarra: "7891011121319",
        descripcion: "CHOMBA PIQUÉ CLÁSICA",
        idmarca: 10,
        nom_marca: "LACOSTE",
        idclasificacion: 1,
        nom_clasificacion: "REMERAS",
        tiva: 10,
        stockactual: 40,
        preventa: 120000,
        costo: 200000
    },
    {
        idarticulo: 7,
        codbarra: "7891011121320",
        descripcion: "DEPORTIVA RUNNING AIR",
        idmarca: 2,
        nom_marca: "NIKE",
        idclasificacion: 8,
        nom_clasificacion: "CALZADOS",
        tiva: 10,
        stockactual: 20,
        preventa: 550000,
        costo: 240000
    },
    {
        idarticulo: 8,
        codbarra: "7891011121321",
        descripcion: "BERMUDA CARGO GABARDINA",
        idmarca: 3,
        nom_marca: "ADIDAS",
        idclasificacion: 9,
        nom_clasificacion: "BERMUDAS",
        tiva: 10,
        stockactual: 15,
        preventa: 95000,
        costo: 150000
    },
    {
        idarticulo: 9,
        codbarra: "7891011121322",
        descripcion: "BLUSA SEDA ESTAMPADA",
        idmarca: 5,
        nom_marca: "H&M",
        idclasificacion: 5,
        nom_clasificacion: "BLUSAS",
        tiva: 10,
        stockactual: 22,
        preventa: 110000,
        costo: 200000
    },
    {
        idarticulo: 10,
        codbarra: "7891011121323",
        descripcion: "SACO DE VESTIR SLIM",
        idmarca: 8,
        nom_marca: "CALVIN KLEIN",
        idclasificacion: 10,
        nom_clasificacion: "SACOS",
        tiva: 10,
        stockactual: 5,
        preventa: 750000,
        costo: 500000
    }
    ];

    // CREAR UN ARRAY de objetos: compras---------------------------------------------
    var comprascabecera = [
        {
            idcompra: 1,
            idproveedor: 1,
            numfactura: "001-001-1234567",
            feccompra: "2025-05-05",
            condicion: "CONTADO",
            stexenta: 0,
            stiva5: 200000,
            stiva10: 700000,
            totcompra: 900000,
            liqiva5: 9524,
            liqiva10: 63636,
            totiva: 73160,
            saldo: 0,
            anulado: "NO"
        }
    ];
    var comprasdetalle = [
        {
            idcompradet: 1,
            idcompra: 1,
            item: 1,
            idarticulo: 2,
            cantidad: 2,
            preuni: 100000,
            tiva: 5,
            subtotal: 200000
        },
        {
            idcompradet: 2,
            idcompra: 1,
            item: 2,
            idarticulo: 1,
            cantidad: 1,
            preuni: 700000,
            tiva: 10,
            subtotal: 700000
        },
    ];
    var clientes = [
        {
            idcliente: 1,
            cedula: "1234567",
            nombre: "JUAN PEREZ",
            celular: "0971-123456",
            direccion: "AV. SIN NOMBRE C/PUNTAS DEL NORTE",
            ciudad: "CONCEPCIÓN"
        },
        {
            idcliente: 2,   
            cedula: "223344",
            nombre: "MARIA GOMEZ",
            celular: "0971-001100",
            direccion: "ALEJO GARCÍA Y EUSEBIO AYALA",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
    idcliente: 3,
    cedula: "334455",
    nombre: "JUAN PEREZ",
    celular: "0982-223344",
    direccion: "AVDA. SAN JOSE 123",
    ciudad: "ENCARNACIÓN"
},
{
    idcliente: 4,
    cedula: "445566",
    nombre: "ANA LOPEZ",
    celular: "0975-556677",
    direccion: "CALLE PALMA Y OLMOS",
    ciudad: "ASUNCIÓN"
},
{
    idcliente: 5,
    cedula: "556677",
    nombre: "CARLOS RAMIREZ",
    celular: "0981-778899",
    direccion: "KM 5 MONSEÑOR RODRÍGUEZ",
    ciudad: "CIUDAD DEL ESTE"
},
{
    idcliente: 6,
    cedula: "667788",
    nombre: "SOFIA MARTÍNEZ",
    celular: "0973-112233",
    direccion: "AVDA. DEFENSORES DEL CHACO 456",
    ciudad: "SAN LORENZO"
},
{
    idcliente: 7,
    cedula: "778899",
    nombre: "PEDRO GONZÁLEZ",
    celular: "0984-334455",
    direccion: "CALLE ITURBE Y ESTIGARRIBIA",
    ciudad: "VILLARRICA"
},
{
    idcliente: 8,
    cedula: "889900",
    nombre: "LUCIA FERNÁNDEZ",
    celular: "0976-445566",
    direccion: "AVDA. ARTIGAS 890",
    ciudad: "ASUNCIÓN"
},
{
    idcliente: 9,
    cedula: "990011",
    nombre: "MIGUEL TORRES",
    celular: "0987-556677",
    direccion: "KM 8 AVDA. MONSEÑOR RODRÍGUEZ",
    ciudad: "CIUDAD DEL ESTE"
},
{
    idcliente: 10,
    cedula: "101112",
    nombre: "CAMILA DUARTE",
    celular: "0978-667788",
    direccion: "AVDA. PARAGUAY Y COLÓN",
    ciudad: "ENCARNACIÓN"
}


    ];
    // CREAR UN ARRAY de objetos: ventas---------------------------------------------
    // Tabla: Ventas

    var ventas =[
        {
            idventa: 1,
            fecha: "2025-06-01",
            hora: "14:30",
            idcliente: 1,
            idvendedor: 2,
            metodopago: "EFECTIVO",
            estadopago: "PAGADO",
            descuento: 0,
            impuesto: 10,
            total: 100000,
            totalfinal: 110000,
            estadoventa: "COMPLETADA"

        }
    ];
    var ventasdetalle = [
        {
            idventadet: 1,
            idventa: 1,
            idarticulo: 2,
            cantidad: 1,
            preuni: 100000, 
            subtotal: 100000
        }
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("ventas", JSON.stringify(ventas));
    localStorage.setItem("ventasdetalle", JSON.stringify(ventasdetalle));
    // Guardar en localStorage como cadena JSON 
    localStorage.setItem("articulos", JSON.stringify(articulos));

    // Guardar en localStorage como cadena JSON 
    localStorage.setItem("clasificaciones", JSON.stringify(clasificaciones));

    // Guardar en localStorage como cadena JSON 
    localStorage.setItem("marcas", JSON.stringify(marcas));
    
    // Guardar en localStorage como cadena JSON 
    localStorage.setItem("clientes", JSON.stringify(clientes));
            

    // Guardar en localStorage como cadena JSON
    localStorage.setItem("comprascabecera", JSON.stringify(comprascabecera));
    localStorage.setItem("comprasdetalle", JSON.stringify(comprasdetalle));
    //---------------------------------------------------------------------------------
}