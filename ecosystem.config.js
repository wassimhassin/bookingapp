module.exports = {
    apps: [
      {
        name: 'backend',
        script: 'index.js',
        cwd: '/Booking/api',
        watch: false,
        env: {
          NODE_ENV: 'production',
          PORT: 8000
        }
      },
      {
        name: 'frontend',
        script: 'npx',
        args: 'serve -s build -l 3000',
        cwd: '/Booking/client',
        watch: false,
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
  