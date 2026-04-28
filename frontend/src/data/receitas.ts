export interface Ingrediente {
  nome: string
  quantidade: number
  medida: string
}

export interface Receita {
  id: number
  nome: string
  tempoPreparo: number
  unidadePreparo: string
  complexidade: string
  favorita: boolean
  ingredientes: Ingrediente[]
  modoPreparo: string
}

export const receitasIniciais: Receita[] = [
  {
    id: 1,
    nome: 'Panqueca de banana',
    tempoPreparo: 20,
    unidadePreparo: 'minutos',
    complexidade: 'Fácil',
    favorita: false,
    ingredientes: [
      { nome: 'banana', quantidade: 1, medida: 'unidade' },
      { nome: 'ovos', quantidade: 2, medida: 'unidade' },
      { nome: 'aveia', quantidade: 2, medida: 'colher de sopa' },
      { nome: 'cacau', quantidade: 1, medida: 'colher de sobremesa' },
      { nome: 'coco ralado', quantidade: 1, medida: 'colher de café' },
    ],
    modoPreparo:
      'Amasse a banana e misture com os ovos batidos. Adicione a aveia e o cacau, misturando até obter uma massa homogênea. Despeje pequenas porções em frigideira untada, tampe e vire quando dourarem. Polvilhe coco ralado por cima.',
  },
  {
    id: 2,
    nome: 'Berinjela recheada',
    tempoPreparo: 90,
    unidadePreparo: 'minutos',
    complexidade: 'Fácil',
    favorita: false,
    ingredientes: [
      { nome: 'berinjela', quantidade: 3, medida: 'unidades' },
      { nome: 'azeite', quantidade: 1, medida: 'colher de sopa' },
      { nome: 'alho', quantidade: 1, medida: 'dente' },
      { nome: 'carne moída', quantidade: 500, medida: 'gramas' },
      { nome: 'molho de tomate', quantidade: 300, medida: 'gramas' },
      { nome: 'queijo mussarela ralado', quantidade: 400, medida: 'gramas' },
      { nome: 'azeitonas fatiadas', quantidade: 100, medida: 'gramas' },
    ],
    modoPreparo:
      'Corte a berinjela ao meio, retire parte da polpa e pique em cubos. Refogue alho no azeite, adicione a carne moída, polpa da berinjela, molho de tomate e cebolinha. Recheie as berinjelas, cubra com queijo e azeitonas. Asse a 180°C por 30 minutos.',
  },
  {
    id: 3,
    nome: 'Pudim de chia',
    tempoPreparo: 120,
    unidadePreparo: 'minutos',
    complexidade: 'Médio',
    favorita: false,
    ingredientes: [
      { nome: 'iogurte natural', quantidade: 2, medida: 'unidades' },
      { nome: 'chia', quantidade: 50, medida: 'gramas' },
      { nome: 'leite', quantidade: 200, medida: 'ml' },
      { nome: 'adoçante', quantidade: 30, medida: 'gramas' },
      { nome: 'coco ralado', quantidade: 50, medida: 'gramas' },
    ],
    modoPreparo:
      'Misture o iogurte com a chia, leite, adoçante, baunilha, coco ralado e canela. Leve à geladeira para a chia hidratar. Sirva com frutas a gosto.',
  },
  {
    id: 4,
    nome: 'Frango com abobrinha',
    tempoPreparo: 55,
    unidadePreparo: 'minutos',
    complexidade: 'Médio',
    favorita: false,
    ingredientes: [
      { nome: 'abobrinha', quantidade: 2, medida: 'unidades' },
      { nome: 'azeite', quantidade: 1, medida: 'colher de café' },
      { nome: 'frango desfiado', quantidade: 400, medida: 'gramas' },
      { nome: 'cenoura', quantidade: 1, medida: 'unidade' },
      { nome: 'tomate', quantidade: 1, medida: 'unidade' },
      { nome: 'requeijão', quantidade: 100, medida: 'gramas' },
    ],
    modoPreparo:
      'Corte as abobrinhas em fatias finas e grelhe com azeite. Misture frango desfiado com azeitona, cenoura ralada, tomate picado e requeijão. Sobreponha três fatias, recheie e enrole. Sirva decorado com manjericão.',
  },
]
