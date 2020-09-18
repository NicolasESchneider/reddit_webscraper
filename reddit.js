import puppeteer from 'puppeteer'
const REDDIT_URL = (subreddit) => `https://old.reddit.com/r/${subreddit}/`;
const SUBREDDIT = `AskReddit`;

export const getPostTitles = async () => {
    const browser = await puppeteer.launch({
        // headless: false
        // comment above line in to see what is happening
    });
    const page = await browser.newPage()
    await page.goto(REDDIT_URL(SUBREDDIT), { waitUntil: 'networkidle2' });
    const posts = await page.evaluate(() => {
        const result = []
        const elements = document.getElementsByClassName('thing');
        for (var element of elements)
            result.push(element.querySelector('a').innerText)
        return result;
    });
    await browser.close();
    return posts
}
