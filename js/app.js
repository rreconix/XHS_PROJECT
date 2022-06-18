const video = document.querySelector('#video');

const placeImage = (image) => {
  const img = new Image();
  img.src = image;
  video.appendChild(img);
}

const sleep = async(ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const placeImages = async(images) => {
  for(let i = 0; i < images.length; i++){
    if(video.childElementCount > 2) removeChildren()
    placeImage(images[i])
    await sleep(200)
  }
  
  await sleep(3000)
  placeImages(images)
}

const removeChildren = () => {
  [...video.children].forEach((child, index) => {
    if(index >= video.childElementCount - 1) return
    video.removeChild(child)
  })
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
