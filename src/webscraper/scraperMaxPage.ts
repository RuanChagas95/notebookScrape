import axios from "axios";
import * as cheerio from "cheerio";

export async function scraperMaxPage(webscraperPage: string) {
    const { data } = await axios.get(webscraperPage);
    const $ = cheerio.load(data);

    const maxPage = parseInt($('.pagination li').last().prev().text());

    return maxPage;
}
