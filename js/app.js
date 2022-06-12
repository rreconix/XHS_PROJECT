const video = document.querySelector('#video')
const videoRect = video.getBoundingClientRect()

video.addEventListener('click', e => {
    console.log(e.clientX - videoRect.left, e.clientY - videoRect.top)
})

const videoHeight = videoRect.height
const videoWidth = videoRect.width

const changeImg = async(img, sources, delay) => {
    let counter = 0;
    setInterval(() => {
        img.src = sources[1 - counter % 2];
        counter++
    }, delay)
}

export const placeImage = async({ x, y, w = 75, h = 75, source1, source2 = undefined, delay = 1000 } = {}) => {
    if([x,y, source1].some(val => val == undefined)){
        return console.warn('Invalid parameters');
    }
    const img = new Image(w, h);
    img.src = source1
    img.style.left = x + '%'
    img.style.top = y + '%'
    video.appendChild(img)

    if(source2 !== undefined){
        await changeImg(img, [source1, source2], delay)
    }
}

export const enterMultipleImages = (array) => {
    array.forEach(obj => {
        placeImage(obj)
    })
}


export const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const removeChildren = async(index1, index2 = video.childElementCount - index1) => {
    let children = []
    for(let i = 0; i < index2; i ++){
        children.push([...video.children][index1 + i])
    }

    children.forEach(child => {
        video.removeChild(child)
    })
}