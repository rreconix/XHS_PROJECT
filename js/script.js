import { text } from '../text.js'
import { placeImage, sleep, enterMultipleImages, removeChildren } from './app.js'

enterMultipleImages(text[0])
await sleep(1000)
enterMultipleImages(text[1])
await sleep(1000)
placeImage(
    {x: 60, y: 70, w: 200, h: 200, source1: './images/blastoise.png'}
)
await sleep(1000)
removeChildren(0)