const server = require('./server')

const port = process.env.PORT || 7000;
server.listen(port, () => console.log(`server listening at port ${port}`))