const fs = require('fs')
var http = require('https')
const root = 'https://les2minutesdupeuple.tk'

const readFile = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, {encoding: 'utf-8'}, (err,data) => {
      if (err) { reject(err) } else { resolve(data) }
    })
  })
}

const extractUrls = (data) => {
  const matchs = data.match(/href="(.+?)".+?<\/span>/g)
  return matchs.map(match => {
    const file = match.match(/href="(.+?)"/)[1]
    var title = match.match(/span>(.+?)<\/span/)[1]
    title = title.replace('Ã©', 'é')
    title = title.replace('Ã´', 'ô')
    title = title.replace('Ã¨', 'è')
    title = title.replace('Ã ', 'à')
    title = title.replace('Ãª', 'ê')
    title = title.replace('Ã«', 'ë')
    title = title.replace('\\', '')
    title = title.replace('Ã', 'Ç')
    
    return { file, title }
  })
}

const downloadFile = (url, fileName, callback) => {
  var file = fs.createWriteStream(fileName)
  http.get(url, (response) => {
    response.pipe(file)
    file.on('finish', () => {
      file.close(callback)
    })
  })
}

const main = async () => {
  const fileContent = await readFile('./data_origin.xml')
  const results = extractUrls(fileContent)

  const file = results[0]
  console.log(results)
  // downloadFile(root + file, 'test.mp3', (data, error) => {
  //   if (error) { console.log(error) } else { console.log(data) }
  // })
}

main()
