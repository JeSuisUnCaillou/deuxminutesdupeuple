const fs = require('fs')
const root = 'https://les2minutesdupeuple.tk'

const readFile = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, {encoding: 'utf-8'}, (err,data) => {
      if (err) { reject(err) } else { resolve(data) }
    })
  })
}

const extractUrls = (data) => {
  const matchs = data.match(/href="(.+?)"/g)
  return matchs.map(match => match.substring(6, match.length - 1))
}

const main = async () => {
  const fileContent = await readFile('./data_origin.xml')
  const results = extractUrls(fileContent)
  console.log(results)
}

main()
