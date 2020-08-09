//Dados
const proffys = [
    { 
        name: "Renan Martarelli",
        avatar: "https://avatars0.githubusercontent.com/u/62927759?s=460&u=e6a6ad18ed3fb8de83d732edf1db7fca2c5537c5&v=4",
        whatsapp: "999999999",
        bio: "Engenheiro entusiasta em tecnologia e video games<br><br>Doido de pedra, mito nos games e engenheiro e programador nas horas vagas.",
        subject: "Engenheiro civil",
        cost: "200,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
     },
     { 
        name: "Flavio Fernando",
        avatar: "https://avatars1.githubusercontent.com/u/61588919?s=460&u=a716dd90443eca06b7373fc922554771000f4048&v=4",
        whatsapp: "999999999",
        bio: "Professor na arte de explosões<br><br>Conhecido na quebrada como Flavinho, lessiona de maneira impressionante a arte de explodir as coisas. Talibã infiltrado, já participou de vários shows pirotecnicos ajudando os fieis a alcançar as sonhadas 7 virgens prometidas por Alá.",
        subject: "Professor",
        cost: "999,99",
        weekday: [
            1
        ],
        time_from: [720],
        time_to: [1220]
     }
    ]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render('index.html')
}

function pageStudy (req, res) {
        const filters = req.query
    return res.render('study.html', { proffys, filters, subjects, weekdays })
}

function pageGiveclasses (req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty){
            
        data.subject = getSubject(data.subject)

        proffys.push(data)
    
        return res.redirect('/study')
    }     
    return res.render('give-classes.html', {subjects, weekdays})
}

//SERVER
const express = require('express')
const server = express()

// configurar Nunjuck (template engine)
const nunjucks = require('nunjucks') 
nunjucks.configure('src/views', {
    express : server,
    noCache: true,
})

//Inicio e conf do server
server
//configurar arquivos estáticos (ccs, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get('/', pageLanding) 
.get('/study', pageStudy) 
.get('/give-classes', pageGiveclasses)
//Start do servers
.listen(5500)
