const video = document.querySelector('#video')
const videoRect = video.getBoundingClientRect()

video.addEventListener('click', e => {
    console.log(e.clientX - videoRect.left, e.clientY - videoRect.top)
})

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
    img.style.left = x + 'px'
    img.style.top = y + 'px'
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

export const clearPage = async() =>{
    [...video.children].forEach(element => {
        video.removeChild(element)
    })
}

export const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}