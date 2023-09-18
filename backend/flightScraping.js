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
  await page.goto("https://www.makemytrip.com/flight/search?itinerary=UDR-BLR-25/09/2023&tripType=O&paxType=A-1_C-0_I-0&intl=false&cabinClass=E&ccde=IN&lang=eng");
//   await page.type(
//     "gsgwcjk atm_1d13e1y_k75hcd atm_yrukzc_wwb3ei atm_10yczz8_kb7nvz atm_10yczz8_cs5v99__1ldigyt atm_10yczz8_11wpgbn__1v156lz atm_10yczz8_egatvm__qky54b atm_10yczz8_qfx8er__1xolj55 atm_10yczz8_ouytup__w5e62l g14v8520 atm_9s_11p5wf0 atm_d5_j5tqy atm_d7_1ymvx20 atm_dl_1mvrszh atm_dz_hxz02 dir dir-ltr"
//   );
//   await page.keyboard.press("Enter");
  await page.waitForTimeout(5000);
  await page.waitForSelector('.listingCard');

  const flightsData = [];
  const $ = load(await page.content());
  $(
    '.listingCard'
  ).each((_, element) => {
    // const image = $(".logo1", element).text();
    const name = $(".airlineName", element).text();
    const departureTime = $(".timeInfoLeft > p > span", element).text();
    const destinationTime = $(".timeInfoRight > p > span", element).text().substring(0, 10);
    const price = $(".clusterViewPrice", element).text();
    const departureCity = $(".timeInfoLeft .blackText > font", element).text();
    const destinationCity = $(".timeInfoRight .blackText > font", element).text();
    flightsData.push({
        // image: image,
        name: name,
        departureTime: departureTime,
        destinationTime: destinationTime,
        price: price,
        departureCity: departureCity,
        destinationCity: destinationCity
    });
  });

//   await browser.close();
   await fs.writeFileSync("flights.json", JSON.stringify(flightsData), "utf-8");
  console.log(flightsData);
};

data();