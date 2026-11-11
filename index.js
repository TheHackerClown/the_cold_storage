const os = require('os');
console.log(`CPU: ${os.cpus()[0]?.model ?? os.arch()} | Cores: ${os.availableParallelism?.() ?? os.cpus().length} | RAM: ${(os.totalmem() / 2 ** 30).toFixed(2)} GB`);