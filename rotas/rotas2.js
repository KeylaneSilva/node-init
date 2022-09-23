const express = require('express')
const rotas = express.Router()

const cursos = [
  {'curso':'Node', 'info':'Curso de Node'},
  {'curso':'JavaScript', 'info':'Curso de Javascript'},
  {'curso':'React', 'info':'Curso de React'},
  {'curso':'Angular', 'info':'Curso de Angular'}
]

rotas.get('/', (req,res) => {
  res.json({ola:'Seja Bem-Vindo'})
})

rotas.get('/:cursoid', (req, res) => {
  const nomeCurso = req.params.cursoid
  const infoCurso = cursos.find(i => i.curso == nomeCurso)
  // res.send(nomeCurso)
  // res.send(infoCurso)

  if(!infoCurso){
    res.status(404).json({erro:'Curso não encontrado', cursoPesquisado: nomeCurso})
  }else{
    res.status(200).json(infoCurso)
  }
})


module.exports = rotas