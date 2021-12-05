var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/KaramullinTimur/Stickers-Svelte.git', 
        user: {
            name: 'KaramullinTimur', 
            email: 'karamullint.h@gmail.com' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)