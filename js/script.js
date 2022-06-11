import { text } from '../text.js'
import { placeImage, clearPage, sleep, enterMultipleImages } from './app.js'
enterMultipleImages(text[0])
placeImage(
    {x: 500, y: 300, w: 200, h: 200, source1: './images/red.png'}
)
await sleep(10000)
await clearPage()