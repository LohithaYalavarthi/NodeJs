const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  console.log('request made')

  res.setHeader('Content-Type', 'text/html')

  const path = './views'
  switch (req.url) {
    case '/':
      path += 'index.html'
      break
    case '/about':
      path += 'about.html'
      break
  }
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.statusCode = 200
      res.end(data)
    }
  })
  //   res.write('hello ninjas')
})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})
