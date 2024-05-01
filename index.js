//Iteraciones Par Programming
//Objetos. Declaración
const Coche = {
    marca: 'Kia',
    modelo: 'Rio',
    matricula: '1111QQQ'
};
const Casa = {
    codPostal: '55000',
    calle: 'calle',
    portal: 21,
    piso: 7
};
const FullStackDeveloper = {
    lenguajes: ['js', 'python'],
    proyectos: ['proyecto1', 'proyecto2']
};
const Perro = {
    nombre: 'Doggo',
    raza: 'labrador',
    color: 'negro',
    edad: 5,
    ladrar: function () {
        console.log('woof');
    },
    popo: function() {
        return Math.random() * 3;
    }
};
//Objetos. Lectura de propiedes
const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil['marca'];

const grupos = Concierto.grupos;

const RGB = [Led.rojo, Led.verde, Led.azul];

//Objetos. Moduficación de propiedades
Portatil.modelo = 'P345';
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
    nombreArchivo: '',
    copias: 0,
    numPaginas: 0,
    tinta: {
        rojo: 0,
        verde: 0,
        azul: 0
    }
}

//Iteraciones Pair Programming
//Declaración
const Noticia = {
    titular: '',
    cuerpo: ''
}
const Persona = {
    nombre: '',
    apellidos: '',
    edad: 0
}
const Avion = {
    numPasajeros: 0,
    despegar: function() {
        console.log('despegando'); 
    },
    volar: function() {
        console.log('llegando al destino'); 
    },
    aterrizar: function() {
        console.log('aterrizando'); 
    }
}
const Paquete = {
    contenido: []
}
const Pais = {
    numHabitantes: 0,
    continente: '',
    gentilicio: ''
}

//Lectura de propiedades


const codError = O_Error.codigo;
const integrantes = Grupo['integrantes'];
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil.especificaciones;

//Modificación de propiedades

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';
Led.encendido = !Led.encendido;
Movil.temperatura = '20º';
