const abrigos = [
  {
    id: 1,
    nome: "Escola Municipal São Carlos Acutis",
    endereco: "Rua Assis, 33",
    capacidade: 100,
    ocupados: 100,
    imagem: "images/escolaacutis.jpg"
  },

  {
    id: 2,
    nome: "Ginásio Guido Schaffer",
    endereco: "Avenida Anchieta, 120",
    capacidade: 300,
    ocupados: 100,
    imagem: "images/ginasioguido.jpg"
  },

  {
    id: 3,
    nome: "Paróquia Santa Rita de Cássia",
    endereco: "Rua Itália, 1457",
    capacidade: 80,
    ocupados: 58,
    imagem: "images/paroquiacassia.jpg"
  },

  {
    id: 4,
    nome: "Centro Comunitário Divina Misericórdia",
    endereco: "Av. Kowalska, 104",
    capacidade: 150,
    ocupados: 150,
    imagem: "images/centrodivinammisericordia.jpg"
  },

  {
    id: 5,
    nome: "Escola Estadual Pierre Giorgio Frassati",
    endereco: "Rua Turim, 1925",
    capacidade: 120,
    ocupados: 100,
    imagem: "images/escolapierre.jpg"
  },

  {
    id: 6,
    nome: "Instituto Opus Dei",
    endereco: "Rua José Maria Escrivá, 902",
    capacidade: 100,
    ocupados: 100,
    imagem: "images/opusdei.jpg"
  },

  {
    id: 7,
    nome: "Centro de Convivência São José",
    endereco: "Rua dos Operários, 150",
    capacidade: 120,
    ocupados: 110,
    imagem: "images/centrocvjose.jpg"
  },

  {
    id: 8,
    nome: "Paróquia Nossa Senhora de Fátima",
    endereco: "Rua Itália, 705",
    capacidade: 230,
    ocupados: 150,
    imagem: "images/paroquiafatima.jpg"
  },

  {
    id: 9,
    nome: "Instituto Teresinha",
    endereco: "Rua Teresa de Lisieux, 110",
    capacidade: 98,
    ocupados: 76,
    imagem: "images/institutoteresinha.jpg"
  },


]



const params = new URLSearchParams(window.location.search)

const id = Number(params.get('id'))

const abrigo = abrigos.find(a => a.id === id)

document.getElementById('nome').textContent = abrigo.nome

document.getElementById('endereco').textContent = abrigo.endereco

document.getElementById('vagas').textContent =
`${abrigo.ocupados}/${abrigo.capacidade} vagas`


const status =
  abrigo.ocupados >= abrigo.capacidade
    ? 'Lotado'
    : 'Disponível'

const statusElemento = document.getElementById('status')

statusElemento.textContent = status

statusElemento.classList.add(status)


document.getElementById('imagem').src = abrigo.imagem