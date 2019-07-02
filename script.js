const fs = require('fs')
var http = require('https')
const root = 'https://les2minutesdupeuple.tk'
const folderDest = 'episodes/'

const readFile = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, {encoding: 'utf-8'}, (err,data) => {
      if (err) { reject(err) } else { resolve(data) }
    })
  })
}

const extractData = (data) => {
  const matchs = data.match(/href="(.+?)".+?<\/span>/g)
  return matchs.map(match => {
    const file = match.match(/href="(.+?)"/)[1]
    var title = match.match(/span>(.+?)<\/span/)[1]
    title = title.replace(/Ã©/g, 'é')
    title = title.replace(/Ã´/g, 'ô')
    title = title.replace(/Ã¨/g, 'è')
    title = title.replace(/Ã&nbsp;/g, 'à')
    title = title.replace(/Ãª/g, 'ê')
    title = title.replace(/Ã«/g, 'ë')
    title = title.replace(/\\/g, '')
    title = title.replace(/Ã/g, 'Ç')
    title = title.replace(/Ã/g, 'É')
    title = title.replace(/:/g, '-')
    
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

const download_recursive = (data, index) => {
  if (index < data.length) {
    const datum = data[index]
    console.log('try ' + datum.title + ' (' + datum.file + ')')
    downloadFile(root + datum.file, folderDest + datum.title + '.mp3', (data, error) => {
      if (error) { console.log(error) } else { download_recursive(data, index + 1) }
    })
  }
}

const main = async () => {
  const fileContent = await readFile('./data_origin.xml')
  const data = extractData(fileContent)

  download_recursive(data, 0)
}

main()
