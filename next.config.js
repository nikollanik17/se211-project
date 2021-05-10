const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')
		config.resolve.alias['public'] = path.join(__dirname, 'public')
    return config
  }
}