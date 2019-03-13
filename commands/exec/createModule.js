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

const createModule = async (moduleName, program) => {
  /* Input module name */
  if (typeof moduleName !== 'string' || !moduleName) {
    moduleName = ''
  }

  while (!moduleName || !moduleName.match(/^[a-zA-Z][a-zA-Z0-9'-]*$/)) {
    moduleName = await getModuleName(program)
  }
  /* ====================== */

  console.log('moduleName: ', moduleName)
  console.log('ModuleName: ', moduleName.replace(/[A-Z]/g, '-$&').replace(/^-|-$/g, '').toLowerCase())
  console.log('module-name: ', )
  console.log('Module name: ', )

  /* Create module dir */
  console.log('Create module dir')
  /* ====================== */

  /* Module store */
  if (program.store) {
    console.log('Generate module store.')
  }
  /* ====================== */

  /* Module router */
  if (program.router) {
    console.log('Generate module router.')
  }
  /* ====================== */

  /* Module service */
  if (program.service) {
    console.log('Generate module service.')
  }
  /* ====================== */

  /* Module service */
  if (program.component) {
    console.log('Generate module component.')
  }
  /* ====================== */

  return moduleName
}

module.exports = program => {
  program
    .command('createModule [name]')
    .description('Create new vue module')
    .action(async name => {
      try {
        program.successMessage('Start create module.')
        await createModule(name || program.name, program)
        program.successMessage('Create module successfully.')
      } catch (error) {
        console.log(JSON.stringify(error))
        console.log(error)
      }
      process.exit()
    })
}
