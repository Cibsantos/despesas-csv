import axios from 'axios'

async function getDespesasAll() {
  try {
    const response = await axios.get('http://localhost:3000/despesas')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export default getDespesasAll();