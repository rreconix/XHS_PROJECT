import { text } from '../text.js'
import { placeImage, sleep, enterMultipleImages, removeChildren } from './app.js'
enterMultipleImages(text[0])
enterMultipleImages(text[1])
await removeChildren(0)
placeImage(
    {x: 60, y: 70, w: 200, h: 200, source1: './images/blastoise.png'}
)
await sleep(10000)

