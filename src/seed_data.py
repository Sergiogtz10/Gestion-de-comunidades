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
            "id":1,
            "address":"C/ Vilafranca 2, Barcelona",
            "flats":15
        },
        {
            "id":2,
            "address":"C/ Industria 64, Segovia",
            "flats":34
        }
    ],
    "User":[
        {
            "id":1,
            "first_name":"Marina",
            "last_name":"Rojo",
            "flat_number":"5ºA",
            "phone_number":"602602602",
            "email":"marina@gmail.com",
            "password": encryp_pass("1234"),
            "role_id":1
        },
          {
            "id":2,
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
            "user_id":1,
            "community_id":1
        },

        {
            "user_id":2,
            "community_id":1
        }
    ]
}