const Path = require('path')
const fs = require('fs')
const marked = require('marked')
const front = require('front-matter')

function path(p) {
  return Path.resolve(__dirname, p)
}

const types = {
  themes: [],
  traits: []
}

// Generate JSON files for our data
for (let type in types) {
  // Populate  array
  fs.readdirSync(path(type)).forEach(fileName => {
    // Get the raw text data and parse the YML front-matter
    const file = fs.readFileSync(path(`${type}/${fileName}`), 'utf8')
    const parsed = front(file)

    // Add the item to the array
    types[type].push({
      ...parsed.attributes,
      html: marked(parsed.body)
    })
  })

  // Write our array to a JSON file
  fs.writeFile(path(`${type}/index.json`), JSON.stringify(types[type]), err => {
    if (err) throw err
    console.log(`😺  compiled ${type}`)
  })
}
