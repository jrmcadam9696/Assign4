const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'https://github.com/jrmcadam9696/jm5392.git'
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployment successful!');
  }
});
