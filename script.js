const fs = require('fs')
const root = 'https://les2minutesdupeuple.tk'



const readFile = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, {encoding: 'utf-8'}, (err,data) => {
      if (err) { reject(err) } else { resolve(data) }
    })
  })
}

const main = async () => {
  const fileContent = await readFile('./data_origin.xml')
  console.log(fileContent)
}

main()
