/**
* File name: vue-start-kit\commands\exec\createModule.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-31 11:38:35
*/

/**
 * Generate not duplicate base on module name
 * @return {String}
 */
function randomModuleName () {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let string = ''
  for (let i = 0; i < 10; i++) {
    string += letters[ Math.floor(Math.random() * letters.length) ]
  }
  return string
}

/**
 * Get input module name
 * @return {String}
 */
function getModuleName (program) {
  return new Promise((resolve, reject) => {
    let randomName = randomModuleName()
    program.prompt.get({
      properties: {
        name: {
          description: `Module name: <${randomName}>`,
          required: false,
          type: 'string'
        }
      }
    }, function (err, input) {
      if (err) {
        return reject(err)
      }

      input.name = input.name || randomName
      resolve(input.name)
    })
  })
}

const createModule = async program => {
  let moduleName = ''
  do {
    moduleName = await getModuleName(program)
  } while (!moduleName.match(/^[a-zA-Z]*$/))

  console.log(moduleName)
  /* */
  return moduleName
}

module.exports = program => {
  program
    .command('createModule')
    .description('Create new vue module')
    .action(async () => {
      try {
        program.successMessage('Start create module.')
        await createModule(program)
        program.successMessage('Create module successfully.')
      } catch (error) {
        console.log(error)
      }
      process.exit()
    })
}
