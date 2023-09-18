const { default: puppeteer } = require("puppeteer");
const fs = require("fs");
const { load } = require("cheerio");

const data = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // defaultViewport: {
    //     height: 768,
    //     width: 1366
    //   }
  });

  const page = await browser.newPage();
  await page.goto("https://www.airbnb.co.in/");
//   await page.type(
//     "gsgwcjk atm_1d13e1y_k75hcd atm_yrukzc_wwb3ei atm_10yczz8_kb7nvz atm_10yczz8_cs5v99__1ldigyt atm_10yczz8_11wpgbn__1v156lz atm_10yczz8_egatvm__qky54b atm_10yczz8_qfx8er__1xolj55 atm_10yczz8_ouytup__w5e62l g14v8520 atm_9s_11p5wf0 atm_d5_j5tqy atm_d7_1ymvx20 atm_dl_1mvrszh atm_dz_hxz02 dir dir-ltr"
//   );
//   await page.keyboard.press("Enter");
  await page.waitForTimeout(5000);

  const hotelData = [];
  const $ = load(await page.content());
  $(
    '[data-testid="card-container"]'
  ).each((index, element) => {
    const image = $(element).find("img").attr("src");
    const address = $('[data-testid="listing-card-title"]', element).text();
    const distance = $('[data-testid="listing-card-subtitle"] > div:nth-child(2) > span > span', element).text();
    const date = $(".fb4nyux .listing-card-subtitle", element).text();
    const price = $("._1jo4hgw", element).text();
    hotelData.push({
        image: image,
        address: address,
        distance: distance,
        date: date,
        price: price,
    });
  });

//   await browser.close();
  fs.writeFileSync("hotel.json", JSON.stringify(hotelData), "utf-8");
};

data();

// const puppeteer=require("puppeteer");

//     (async () => {
//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();
//         await page.goto("https://www.airbnb.co.in/");
       
    
//         const grabdata = await page.evaluate(() => {
         
//             const img = document.querySelectorAll(".TjRVLb img");
//             const name = document.querySelectorAll(".Epkrse");
//             const data=[];
//             img.forEach((element)=>{
//             data.push(element.src);
//             });
//             return data;

           
    
        
//         });
//         console.log(grabdata);
// })();