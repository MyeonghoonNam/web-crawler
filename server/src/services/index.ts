import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

export const findScrap = async () => {
  try {
    const broswer = await puppeteer.launch({
      headless: 'new',
    });

    const page = await broswer.newPage();

    await page.goto('https://www.gmarket.co.kr/');

    const content = await page.content();
    const $ = cheerio.load(content);
    const lists = $('#list__item > li');

    await broswer.close();

    return lists;
  } catch (e) {
    console.log(e);
    return e;
  }
};
