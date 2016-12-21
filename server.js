const express = require('express')
const moment = require('moment')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`)
})

app.get('/:dateString', (request, response) => {
  let date = request.params.dateString
  const formats = [
    moment.ISO_8601,
    'MMMM D, YYYY',
    'MMMM DD, YYYY',
    'MMM D, YYYY',
    'MMM DD, YYYY',
    'MM D, YYYY',
    'MM DD, YYYY',
    'M D, YYYY',
    'M DD, YYYY',
    'MMMM D YYYY',
    'MMMM DD YYYY',
    'MMM D YYYY',
    'MMM DD YYYY',
    'MM D YYYY',
    'MM DD YYYY',
    'M D YYYY',
    'M DD YYYY',
    'MMMM-D-YYYY',
    'MMMM-DD-YYYY',
    'MMM-D-YYYY',
    'MMM-DD-YYYY',
    'MM-D-YYYY',
    'MM-DD-YYYY',
    'M-D-YYYY',
    'M-DD-YYYY',
    'MMMM D, YY',
    'MMMM DD, YY',
    'MMM D, YY',
    'MMM DD, YY',
    'MM D, YY',
    'MM DD, YY',
    'M D, YY',
    'M DD, YY',
    'MMMM D YY',
    'MMMM DD YY',
    'MMM D YY',
    'MMM DD YY',
    'MM D YY',
    'MM DD YY',
    'M D YY',
    'M DD YY',
    'MMMM-D-YY',
    'MMMM-DD-YY',
    'MMM-D-YY',
    'MMM-DD-YY',
    'MM-D-YY',
    'MM-DD-YY',
    'M-D-YY',
    'M-DD-YY'
  ]

  if (moment(date, formats, true).isValid()) {
    response.send({
      unix: moment(date).unix(),
      natural: moment(date).format('MMMM D, YYYY')
    })
  } else { // could be unix timestamp or invalid date
    date = new Date(date * 1000)

    if (date !== null) { // valid timestamp
    let = natural = moment(date).format('MMMM D, YYYY')

      response.send({
        unix: moment(date).unix(),
        natural: natural == 'Invalid date' ? null : natural
      })
    }
  }
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Listening. Open your app http://localhost:${listener.address().port}`)
})
