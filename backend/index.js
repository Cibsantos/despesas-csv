import getDespesasAll from './server/server.js'
import xl from 'excel4node'

init();

async function init() {
  const header = ['id', 'descricao', 'categoria', 'valor', 'ano-mes', 'dia']
  const despesas = await getDespesasAll
  creatCsv(header, despesas)

}

const wb = new xl.Workbook();
const ws = wb.addWorksheet('Nome Da Planilha');


function creatCsv(header, data) {
  let headColumnIndex = 1
  header.forEach(head => {
    ws.cell(1, headColumnIndex++).string(head)
  })

  let rowIndex = 2;
  Object.values(data).map(record => {
    let colunmIndex = 1;
    Object.entries(record).forEach(([columnName, columnvalue]) => {
      ws.cell(rowIndex, colunmIndex++).string(JSON.stringify(columnvalue))
    })
    rowIndex++
  })
  let date = new Date();

  wb.write(`./../downloads/despesas_${date.getHours()}_${date.getMinutes()}.csv`)

}




