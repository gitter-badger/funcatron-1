module.exports = createServer => router => createServer((req, res) => router({req, res}))