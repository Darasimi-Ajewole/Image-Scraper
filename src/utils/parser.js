export const imageParser = (page) => {
    const parsedImages = []
    const imageTags = page.querySelectorAll('img');
    for (const imageTag of imageTags) {
        const image = {
            src: imageTag.src,
            alt: imageTag.alt,
            // downloadUrl: await generateDownloadUrl(imageTag.src),
        };
        parsedImages.push(image);
    }

    return parsedImages
}

const pageParser = (pageContent) => {
    const parser = new DOMParser();
    const page = parser.parseFromString(pageContent, "text/html");
    const pageTitle = page.querySelector('title').textContent;
    const images = imageParser(page);
    return {pageTitle, images }

}

// const generateDownloadUrl = async (url) => {
//     let response = await fetch(`https://cors-proxy.htmldriven.com/?url=${url}`)
//     response = await response.blob()
//     const downloadUrl = URL.createObjectURL(response)
//     return downloadUrl
// }

export default pageParser;