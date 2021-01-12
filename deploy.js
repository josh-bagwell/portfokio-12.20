const ghpages = require(`gh-pages`)

ghpages.publish(
    `.`, {
        branch: `production-ui`,
        src: [
            `src/**/*`,
            `public/**/*`,
            `Dockerfile`,
            `package*.json`
        ]
    },
    function (err) {
        if (err) console.error(err)
        else console.log(`done`)
    }
)