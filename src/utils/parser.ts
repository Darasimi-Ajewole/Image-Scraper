import { urlChecker } from './validate';

export interface Image {
    src: string,
    alt: string
}

interface ParsedImages {
    [key: string]: Image
}

const correctRelativeUrl = (pageUrl: string, imageSrc: string): string => {
    const url: URL = new URL(pageUrl);
    const root: string = url.origin;
    let src = imageSrc;
    const relativeURL: boolean = src.startsWith('/');
    if (!relativeURL) return src;    
    return `${root}${src}`
}

export const imageParser = (page: Document, pageUrl: string): Image[] => {
    const parsedImages: ParsedImages = {};
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
        const alt: string = imageTag.alt || 'Welcome to Image Scraper';
        for (const attr of imageTag.attributes) {
            const { value, name } = attr

            if (ignoredAttr.has(name)) continue;

            if (allAttr.has(value)) continue;
            allAttr.add(value)

            let validLink: boolean = urlChecker(value);
            validLink = validLink || value.startsWith('/')
            if (!validLink) continue
    
            let src: string = correctRelativeUrl(pageUrl, value);
            // downloadUrl: await generateDownloadUrl(src),
            const image: Image = { src, alt };
            parsedImages[src] = image;    
        }
    }

    return Object.values(parsedImages);
}

const pageParser = (pageContent: string, pageUrl: string): {pageTitle: string, images: Image[] } => {
    const parser = new DOMParser();
    const page: Document = parser.parseFromString(pageContent, "text/html");
    const pageTitleElement = page.querySelector('title');
    const pageTitle = pageTitleElement?.textContent as string;
    const images: Image[] = imageParser(page, pageUrl);
    return { pageTitle, images }
}

// const generateDownloadUrl = async (url) => {
//     let response = await fetch(`https://cors-proxy.htmldriven.com/?url=${url}`)
//     response = await response.blob()
//     const downloadUrl = URL.createObjectURL(response)
//     return downloadUrl
// }
export default pageParser;