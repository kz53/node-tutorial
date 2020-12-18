module.exports = {
  apps: [{
    name: 'node-tutorial',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-221-145-184.compute-1.amazonaws.com',
      key: 'C:/Users/kz53/OneDrive/Desktop/key-pairs/node-server-01.pem',
      ref: 'origin/master',
      repo: 'https://github.com/kz53/node-tutorial.git',
      path: '/home/ubuntu/node-tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}