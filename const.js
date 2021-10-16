import fs from 'fs'

const htmlFiles = {
    indexPage : fs.readFileSync('./html/index.html', 'UTF-8'), 
    articlePage : fs.readFileSync('./html/pages/articles.html', 'UTF-8')
}

const cssFiles = {
    indexCss : fs.readFileSync('./html/css/style.css', 'UTF-8')
}


const jsFiles = {
    scriptjs : fs.readFileSync('./html/js/script.js', 'UTF-8')
}

export{htmlFiles, cssFiles, jsFiles}