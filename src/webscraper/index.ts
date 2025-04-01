import { scraperDetails } from "./scraperDetails";
import { scraperLinks } from "./scraperLinks";
import { scraperMaxPage } from "./scraperMaxPage";

const baseUrl = 'https://webscraper.io/test-sites/e-commerce/static/computers/laptops'

export default async function main() {
    const maxPage = await scraperMaxPage(baseUrl)

    for(let page = 1; page <= maxPage; page++) {

        const links = await scraperLinks({
            webscraperPage: baseUrl,
            filters: {
                title: 'lenovo'
            },
            page
        })
        if (!links) return;
        const details = (links.map((link) => scraperDetails(link)))
        
        console.log(await Promise.all(details));
    }
}
