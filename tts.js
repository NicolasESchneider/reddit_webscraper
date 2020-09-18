import gTTS from 'gtts';

export const saveAsMP3 = (text) => {
    const gtts = new gTTS(text, 'en');
    gtts.save('Voice.mp3', function (err, result){ 
        if(err) { throw new Error(err); } 
        console.log("Text to speech converted!"); 
    });
}