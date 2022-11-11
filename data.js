
module.exports = function () {
    var data = {
        resenas: [
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
        idiomas: [
            {
                id: 1,
                idiomas: "Japones ",
            },
            {
                id: 2,
                idiomas: "Espaniol ",
            },
            {
                id: 3,
                idiomas: "Ingles",
             
            },
            {
                id: 4,
                idiomas: "Coreano",

              }
        ],
        categoria: [
            {
                idCategoria:1,
                nameCategoria: "Indicaciones",
            },
            {
                idCategoria:2,
                nameCategoria: "Objetos",
            }
        ],
        membership: [
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
        rol:[
            {
                id:1,
                rolName: "Profesor",
            },
            {
                id:2,
                rolName: "Usuario",
            },
            {
              id:3,
              rolName: "Padre",
          }
        ],
        usuario: [
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
          {
            id:5,
            name: "Paul",
            lastname: "Weselhof",
            number: 54523832,
            email: "Weselhof@gmail.com",
            password: "valdomero",
          },

        ],
        pictogramas: [
            {
              idPictograma:2324,
              namePictograma: "Simbolos de Emergencia",
              idUsuario: "1"
            },
            {
                idPictograma:2325,
                namePictograma: "Simbolos de Seguridad",
                idUsuario: "2"
            },
            {
                idPictograma:2326,
                namePictograma: "Simbolos de Salud",
                idUsuario: "3"
            },
            {
                idPictograma:2327,
                namePictograma: "Simbolos de Diversion",
                idUsuario: "4"
            },
            {
                idPictograma:2329,
                namePictograma: "Simbolos de Señalizacion",
                idUsuario: "5"
            }
          ]
    }
    return data
}

