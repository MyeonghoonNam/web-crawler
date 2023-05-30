import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

(async () => {
  // headless 모드의 가상 브라우저 실행
  const broswer = await puppeteer.launch({
    headless: 'new',
  });

  // 페이지 생성
  const page = await broswer.newPage();

  // 페이지 url 이동
  await page.goto('https://category.gmarket.co.kr/listview/L100000104.aspx');

  // 페이지 콘텐츠 조회(전체 HTML 코드)
  const content = await page.content();
  // 데이터 추출을 위한 cheerio 로드
  const $ = cheerio.load(content);
  // jquery 문법으로 데이터 접근하여 추출
  const lists = $('#cppLargeCategoryBest > li');

  console.log(lists.length);

  // 가상 브라우저 종료
  await broswer.close();
})();
