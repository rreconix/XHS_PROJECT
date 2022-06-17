const video = document.querySelector('#video');
const videoRect = video.getBoundingClientRect();

video.addEventListener('click', e => {
    console.log(e.clientX - videoRect.left, e.clientY - videoRect.top);
})

const placeImage = (image) => {
    const img = new Image();
    img.src = image;
    video.appendChild(img);
}

const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const placeImages = async(images) => {
    removeChild()
    placeImage(images[0])
    for(const img of images){
        placeImage(img)
        await sleep(200)
        removeChild()
    }
    await sleep(3000)
    placeImages(images)
}

const removeChild = () => {
    const child = video.children[0] || undefined
    if(child) video.removeChild(child)
}

export const getImageSources = () => {
    let images = [];
    for(let i = 1660; i < 1734; i++){
        if(i !== 1723){
            images.push(`./images/IMG-${i}.jpg`)
        }
    }

    return images
}