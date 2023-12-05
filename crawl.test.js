const {normalizeURL, getURLsFromHTML} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path' 
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path' 
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path' 
    expect(actual).toEqual(expected)
})
test('normalizeURL strip http', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path' 
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
     const inputHTMLBody = `
     <html>
       <body>
          <a href="http://blog.boot.dev/">
            boot.dev Blog
           </a>
       </body>
     </html>
     `
    const inputBaseURL = "http://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["http://blog.boot.dev/"] 
    expect(actual).toEqual(expected)
})


test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
      <body>
         <a href="invalid">
           Boot.dev Blog
          </a>
      </body>
    </html>
    `
   const inputBaseURL = "http://blog.boot.dev"
   const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
   const expected = [] 
   expect(actual).toEqual(expected)
})