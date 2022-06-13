import { text } from '../text.js'
import { sleep, placeImages, removeChildren } from './app.js'

placeImages(text[0])
await sleep(1000)
placeImages(text[1])
placeImages(text[2])
await sleep(3000)
removeChildren(0)