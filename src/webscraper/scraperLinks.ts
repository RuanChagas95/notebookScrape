import axios from "axios";
import * as cheerio from "cheerio";

type Filters = {
    title?: string;
}

type scraperLinksProps = {
    filters?: Filters;
    page?: number;
    webscraperPage: string;
}

export async function scraperLinks({filters = {}, page = 1, webscraperPage}: scraperLinksProps) {
    try {
        const url = `${webscraperPage}?page=${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const links: string[] = [];


        $('.product-wrapper.card-body').each((index: number, element) => {
            const title = $(element).find('.title').text()
            if (!(filters.title && title.toLowerCase().includes(filters.title))) return;
            
            const link = 'https://webscraper.io' + $(element).find('.title').attr('href');
            links.push(link);
        });

        return links;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}
