import { getPostTitles } from './reddit.js';
import { saveAsMP3 } from './tts.js';

const titles = await getPostTitles()
const titleString = titles.join('__')

saveAsMP3(titleString);