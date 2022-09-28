
module.exports = function () {
    var data = {
        Resenas: [
            {
                id: 1,
                nameResenas: "lucas ",
                descripcionResenas: " Congratulation"

            },
            {
                id: 2,
                nameResenas: "hiro",
                descripcionResenas: " I really like it"
            },
            {
                id: 3,
                nameResenas: "renato ",
                descripcionResenas: " Wonderful"
            },
            {
                id: 4,
                nameResenas: "junior ",
                descripcionResenas: " Good job"
            }
        ],
        Idiomas: [
            {
                id: 1,
                idiomas: "Japones ",
                Resenas:{
                    "id":2
                }
            },
            {
                id: 2,
                idiomas: "Espaniol ",
                Resenas:{
                    "id":3
                },
            },
            {
                id: 3,
                idiomas: "Ingles",
                Resenas:{
                    "id":2
                },
            },
            {
                id: 4,
                idiomas: "Coreano",
                Resenas:{
                    "id":2
                }
            }
        ],
        Categorias: [
            {
                id:1,
                Categorias: "Indicaciones",
            },
            {
                id:2,
                Categorias: "Objetos",
            }
        ],
        Membership: [
            {
                id:1,
                miembro: "Juan Pablo",
                type: "Mensual",
            },
            {
                id:2,
                miembro: "Teresa Hernandez",
                type: "Anual",
            },
            {
                id:3,
                miembro: "Lucas Yaranaika",
                type: "Anual",
            },
            {
                id:4,
                miembro: "Renato Inapaytan",
                type: "Mensual",
            }

        ],
        Rol:[
            {
                id:1,
                rolName: "Profesor",
            },
            {
                id:2,
                rolName: "Usuario",
            }
        ],
        usuarios: [
          {
            id:1,
            name: "Luisa",
            lastname: "Reyes",
            number: 460553990,
            email: "luisareyes@gmail.com",
            password: "mapa",
          },
          {
            id:2,
            name: "Juana",
            lastname: "Diaz",
            number: 784553240,
            email: "Juanad@gmail.com",
            password: "lopoli",
          },
          {
            id:3,
            name: "Pedro",
            lastname: "Galvez",
            number: 604553240,
            email: "PedroGal@gmail.com",
            password: "retado",
          },
          {
            id:4,
            name: "Jesus",
            lastname: "Solorzano",
            number: 500556840,
            email: "JesusSolor@gmail.com",
            password: "chocolate",
          },

        ],
    }
    return data
}

