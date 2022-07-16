interface Competitor {
  name: string;
  federation: string;
  sport: string;
  numberOfMedals: number;
}

const competitors: Competitor[] = [
  {
     name: "Usain Bolt",
     federation: "Jamaica",
     sport: "Atletismo",
     numberOfMedals: 54
  },
  {
     name: "Michael Phelps",
     federation: "EUA",
     sport: "Natação",
     numberOfMedals: 71
  },
  {
     name: "Rebeca Andrade",
     federation: "Brasil",
     sport: "Ginástica",
     numberOfMedals: 33
  },
  {
     name: "Alison Santos",
     federation: "Brasil",
     sport: "Atletismo",
     numberOfMedals: 19
  },
]


// Ideia
// Rodar por todos os competidores e verificar o país. 
// Pega o pais do competidor
// Verifico a hash procurando uma propriedade desse país
// Se não encontrar, crio uma com o valor do numberOfMedals
// Se encontrar, somo o numberOfMedals ao valor encontrado
// No final, a hash table vai ter os dados que queremos


// Solução com array
interface MedalBoard {
  federation: string;
  totalOfMedals: number
}

function generateMedalBoardWithArray(competitors: Competitor[]): MedalBoard[] {
  const result: MedalBoard[] = []
  
  // Loop de competidores
  for (let competitor of competitors) {
    const medalBoard = result.find((medalBoard) => medalBoard.federation === competitor.federation)
    if(medalBoard) {
      medalBoard.totalOfMedals += competitor.numberOfMedals
    } else {
      const newMedalBoard = {
        federation: competitor.federation,
        totalOfMedals: competitor.numberOfMedals
      }
      result.push(newMedalBoard)
    }
  }

  return result
}


// Solução com HashTable
type HashTable = {
  // Chave é federação, valor é o total de medalhas
  [index: string]: number
}

function generateMedalBoardWithHashTable(competitors: Competitor[]): HashTable {
  const result: HashTable = {}

  for (let competitor of competitors) {
    if(result[competitor.federation]) {
      result[competitor.federation] += competitor.numberOfMedals
    } else {
      result[competitor.federation] = competitor.numberOfMedals
    }
  }

  return result
}

console.table(generateMedalBoardWithArray(competitors))
console.table(generateMedalBoardWithHashTable(competitors))