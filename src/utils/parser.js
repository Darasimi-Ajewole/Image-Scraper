const WINDOW_URL = 'http://localhost:3000';

const correctRelativeUrl = (pageUrl, imageSrc) => {
    const url = new URL(pageUrl);
    const root = url.origin;
    let src = imageSrc;
    const relativeURL = src.startsWith(WINDOW_URL);
    if (!relativeURL) return src;

    src = src.replace(WINDOW_URL, '');

    src = `${root}${src}`;
    
    return src
}

export const imageParser = (page, pageUrl) => {
    const parsedImages = {};
    const imageTags = page.querySelectorAll('img');
    console.log(imageTags);

    for (const imageTag of imageTags) {
        let src = correctRelativeUrl(pageUrl, imageTag.src);
        if (src in parsedImages) continue;

        const image = {
            src: src,
            alt: imageTag.alt,
            // downloadUrl: await generateDownloadUrl(imageTag.src),
        };
        parsedImages[src] = image;
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