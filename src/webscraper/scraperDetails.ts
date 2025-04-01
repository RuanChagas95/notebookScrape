import axios from "axios";
import * as cheerio from "cheerio";
import { Details } from "../types";


export async function scraperDetails(link: string) {
    const { data } = await axios.get(link);
    const $ = cheerio.load(data);
    const laptops: Details[] = [];

    $('.product-wrapper.card-body').each((_, element) => {
        const price = $(element).find('.price').text().trim();
        const title = $(element).find('.title').text().trim();
        const description = $(element).find('.description').text().trim();
        const image = 'https://webscraper.io' + $(element).find('.image').attr('src');
  
        const reviewCount = $(element).find('.review-count').text().trim().split(' ')[0];
  
        const rating = $(element).find('.review-count .ws-icon-star').length;
        const options: Record<string, string> = {};
        $(element).find('.swatches').each((_, swatchElement) => {
            const key = $(swatchElement).prev().text().trim().replace(':', '');
            const values = $(swatchElement).find('button').map((_, btn) => $(btn).text()).get();
            if (key && values.length) {
                options[key] = values.toString();
            }
        });

        laptops.push({ price, title, description, image, options, reviewCount, rating, link });
  
      });


      return laptops[0];
}
