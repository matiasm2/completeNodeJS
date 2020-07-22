#! node

const validator = require('validator')

const emails = ['juan@pepe.com', 'pepe@pepa', 'sarasa@asda.c', 'asdads.com']

emails.forEach((email) =>{
  console.log(`Is ${email} an email? ${validator.isEmail(email)}`);
})
