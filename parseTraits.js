const fs = require('fs')

mkdir('output')
mkdir('output/themes')
mkdir('output/traits')

// Loop over each theme and parse it into smaller documents
fs.readdirSync('themes').forEach(themeDir => {
  fs.readFile(
    `themes/${themeDir}/${fs.readdirSync(`themes/${themeDir}`)[0]}`,
    'utf8',
    (err, data) => {
      if (err) throw err

      // Write the theme to its own file with yml frontmatter
      const theme = parseTheme(data)
      fs.writeFileSync(
        `output/themes/${theme.name.toLowerCase().replace(/[/\\\s]/g, '-')}.md`,
        `---\nname: ${theme.name}\n---\n\n${theme.description}`
      )

      // Write a file for each trait
      parseTraits(data).forEach(trait => {
        fs.writeFileSync(
          `output/traits/${trait.name
            .toLowerCase()
            .replace(/[/\\\s]/g, '-')
            .replace(/[^\w-]/, '')}.md`,
          `---\nname: ${trait.name}\ntheme: ${theme.name}\ncategory: ${
            trait.category
          }\n---\n\n${trait.content}`
        )
      })
    }
  )
})

// Return the name and description of the given theme
function parseTheme(data) {
  const name = data.match(/^#(.+)$/m)[1].trim()
  const description = data.match(/\n(\b[\d\D]+?)\n##\s/)[1].trim()
  return { name, description }
}

// Return an array of trait objects from a theme
function parseTraits(data) {
  const categories = parseCategories(data)
  const traits = []
  categories.forEach(category =>
    traits.push(...parseTraitsFromCategory(category))
  )
  return traits
}

// Return an array of category block strings from a theme
function parseCategories(data) {
  return data.match(/\n##\s([\d\D](?!\n##\s))+/g)
}

// Return an array of trait objects from a category block
function parseTraitsFromCategory(data) {
  return (
    data
      // Parse each trait block into its own string
      .match(/\n###\s([\d\D](?!\n###\s))+/g)
      // Map each trait block to an object
      .map(trait => ({
        name: trait.match(/### (.+)/)[1].trim(),
        category: data.match(/## (.+)/)[1].trim(),
        content: trait.match(/### .+\n([\d\D]+)/)[1].trim()
      }))
  )
}

// Create the directory if it doesn't exist
function mkdir(path) {
  if (!fs.existsSync(path)) fs.mkdirSync(path)
}
