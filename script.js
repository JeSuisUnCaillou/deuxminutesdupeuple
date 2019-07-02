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

const replaceCharacters = (str) => {
  var result = str
  result = result.replace(/Ã&nbsp;/g, 'à')
  result = result.replace(/Ã¢/, 'â')
  result = result.replace(/Ã©/g, 'é')
  result = result.replace(/Ã¨/g, 'è')
  result = result.replace(/Ãª/g, 'ê')
  result = result.replace(/Ã«/g, 'ë')
  result = result.replace(/Ã®/g, 'î')
  result = result.replace(/Ã´/g, 'ô')
  result = result.replace(/Ã§/g, 'ç')
  result = result.replace(/Ã/g, 'Ç')
  result = result.replace(/Ã/g, 'É')
  result = result.replace(/\\/g, '')
  result = result.replace(/:/g, '-')
  return result
}

const extractData = (data) => {
  const matchs = data.match(/href="(.+?)".+<\/span>/g)
  return matchs.map(match => {
    const file = match.match(/href="(.+?)"/)[1]
    var title = match.match(/span>(.+?)<\/span/)[1]
    title = replaceCharacters(title)

    var categoryMatch = match.match(/<span class="details">(.+?)<\/span>/)
    if (categoryMatch) {
      const category = replaceCharacters(categoryMatch[1])
      title = title + ' (' + category + ')'
    }
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
    
    console.log('try ' + datum.title + ' [' + datum.file + ']')
    downloadFile(root + datum.file, folderDest + datum.title + '.mp3', (result, error) => {
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
