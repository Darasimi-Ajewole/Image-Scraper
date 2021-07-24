import { urlChecker } from './validate';

const correctRelativeUrl = (pageUrl, imageSrc) => {
    const url = new URL(pageUrl);
    const root = url.origin;
    let src = imageSrc;
    const relativeURL = src.startsWith('/');
    if (!relativeURL) return src;    
    return `${root}${src}`
}

export const imageParser = (page, pageUrl) => {
    const parsedImages = {};
    const allAttr = new Set();
    const imageTags = page.querySelectorAll('img');
    const ignoredAttr = new Set([
        'srcset',
        'alt',
        'crossorigin',
        'height',
        'ismap',
        'loading',
        'longdesc',
        'referrerpolicy',
        'sizes',
        'srcset',
        'usemap',
        'width',
    ])

    for (const imageTag of imageTags) {
        const alt = imageTag.alt || 'Welcome to Image Scraper';

        for (const attr of imageTag.attributes) {
            const { value, name } = attr

            if (ignoredAttr.has(name)) continue;

            if (allAttr.has(value)) continue;
            allAttr.add(value)

            let validLink = urlChecker(value);
            validLink = validLink || value.startsWith('/')
            if (!validLink) continue
    
            let src = correctRelativeUrl(pageUrl, value);
            // downloadUrl: await generateDownloadUrl(src),
            const image = { src, alt };
            parsedImages[src] = image;    
        }
    }

    return Object.values(parsedImages);
}

const pageParser = (pageContent, pageUrl) => {
    const parser = new DOMParser();
    const page = parser.parseFromString(pageContent, "text/html");
    const pageTitle = page.querySelector('title').textContent;
    const images = imageParser(page, pageUrl);
    return { pageTitle, images }
}

// const generateDownloadUrl = async (url) => {
//     let response = await fetch(`https://cors-proxy.htmldriven.com/?url=${url}`)
//     response = await response.blob()
//     const downloadUrl = URL.createObjectURL(response)
//     return downloadUrl
// }
export default pageParser;