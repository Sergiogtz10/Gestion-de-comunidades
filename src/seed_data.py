from api.shared.encrypte_pass import encryp_pass

data = {
    "Roles":[
        {
            "role_id": 1,
            "role_name": "Administrador"
        },
        {
            "role_id": 2,
            "role_name": "Propietario"
        }
    ],

    "Community":[
        {
            "id": 9991,
            "address": "C/ Vilafranca 2, Barcelona",
            "flats": 15
        },
        {
            "id": 9992,
            "address": "C/ Industria 64, Segovia",
            "flats": 34
        }
    ],

    "Activities":[
        {
            "day": "17/02/2024",
            "time": "16:50h",
            "description": "Reparación del ascensor.",
            "severity": "Importante",
            "community_id": 9991
        },
        {
            "day": "11/06/2023",
            "time": "18:30h",
            "description": "Reunión de vecinos.",
            "severity": "Muy importante",
            "community_id": 9991
        }
    ],
     "Expenses":[
        {
            "concept": "IBERDROLA",
            "amount": "250",
            "date": "30/03/2022",
            "community_id": 9991
        },
        {
            "concept": "ASCENSORES TRESA",
            "amount": "300",
            "date": "30/03/2022",
            "community_id": 9991
        }
    ],
     "Expenses":[
        {
            "concept": "IBERDROLA",
            "amount": "250",
            "date": "30/03/2022",
            "community_id": 1
        },
        {
            "concept": "ASCENSORES TRESA",
            "amount": "300",
            "date": "30/03/2022",
            "community_id": 9991
        }
    ],
   

    "User":[
        {
            "id":9991,
            "first_name":"Marina",
            "last_name":"Rojo",
            "flat_number":"5ºA",
            "phone_number":"602602602",
            "email":"marina@gmail.com",
            "password": encryp_pass("1234"),
            "role_id":1
        },
          {
            "id":9992,
            "first_name":"Mireia",
            "last_name":"Gonzalez",
            "flat_number":"3ºB",
            "phone_number":"602602603",
            "email":"mireia@gmail.com",
            "password": encryp_pass("1234"),
            "role_id":2
        }
    ],

    "Rel_user_community":[
        {
            "user_id":9991,
            "community_id":9991
        },

        {
            "user_id":9991,
            "community_id":9992
        },
        {
            "user_id":9992,
            "community_id":9992
        }
    ],


    "Provider":[
         {
            "id":9991,
            "name": "Piscinas",
            "service": "Servicio de limpieza y mantenimiento de piscinas",
            "logo": "xxxxxxxxx",
            "community_id":9991
        },
        {
            "id":9992,
            "name": "Jardinería López",
            "service": "Servicio de mantenimiento de jardines",
            "logo": "xxxxxxxxx",
            "community_id":9991
        }
    ],

    "Bill":[
        {
            "id":9991,
            "amount":200,
            "details": "Reparar cristal",
            "community_id":9991,
            "provider_id":9991
        },
        {
            "id":9992,
            "amount":100,
            "details": "Reparar cesped dañado",
            "community_id":9991,
            "provider_id":9991
        },
        {
            "id":9993,
            "amount":100,
            "details": "Cambio de grifo",
            "community_id":9992,
            "provider_id":9992
        },
         {
            "id":9994,
            "amount":100,
            "details": "Cambio de grifo",
            "community_id":9992,
            "provider_id":9992
        },
         {
            "id":9995,
            "amount":100,
            "details": "Cambio de grifo",
            "community_id":9992,
            "provider_id":9992
        },
         {
            "id":9996,
            "amount":100,
            "details": "Cambio de grifo",
            "community_id":9992,
            "provider_id":9992
        }
    ],

    "Incident":[
        {
            "bill_id": 9991,
            "community_id": 9991,
            "description": "Cristal roto",
            "id": 9991,
            "severity": "Grave",
            "user_id": 9992,
            "zone": "Cocina",
            "common": False,
            "status":"Recibido"
        },
        {
            "bill_id": 9992,
            "community_id": 9991,
            "description": "Cesped levantado",
            "id": 9992,
            "severity": "Leve",
            "user_id": 9992,
            "zone": "Piscina",
            "common": True,
            "status":"En proceso"
        },
        {
            "bill_id": 9993,
            "community_id": 9991,
            "description": "No funciona el grifo, no sale agua",
            "id": 9993,
            "severity": "Medio",
            "user_id": 9991,
            "zone": "Baño",
            "common": False,
            "status":"Recibido"
        },
        {
            "bill_id": 9994,
            "community_id": 9991,
            "description": "Baldosa rota",
            "id": 9994,
            "severity": "Leve",
            "user_id": 9992,
            "zone": "Piscina",
            "common": True,
            "status":"En proceso"
        },
        {
            "bill_id": 9995,
            "community_id": 9991,
            "description": "Puerta del rellano no cierra bien",
            "id": 9995,
            "severity": "Leve",
            "user_id": 9992,
            "zone": "Rellano 4a planta",
            "common": True,
            "status":"En proceso"
        },
        {
            "bill_id": 9996,
            "community_id": 9991,
            "description": "Ventana escaleras estropeada",
            "id": 9996,
            "severity": "Leve",
            "user_id": 9992,
            "zone": "Escaleras entre 2º y 3er piso",
            "common": True,
            "status":"En proceso"
        },
    ]
}
