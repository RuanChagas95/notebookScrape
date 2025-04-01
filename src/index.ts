import { scraperDetails } from "./webscraper/scraperDetails";
import { scraperLinks } from "./webscraper/scraperLinks";
import { scraperMaxPage } from "./webscraper/scraperMaxPage";

const baseUrl = 'https://webscraper.io/test-sites/e-commerce/static/computers/laptops'

async function main() {
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


main()


