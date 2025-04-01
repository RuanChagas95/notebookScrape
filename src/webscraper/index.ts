import { db } from "../lib/db";
import { DetailsValidator } from "../utils/detailsValidate";
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
        const details = await Promise.all((links.map((link) => scraperDetails(link))))
        details.forEach(async (detail) => {
            try {
                const validated = new DetailsValidator(detail).get();
                await db.laptop.create({
                    data: {
                        ...validated,
                        options: JSON.stringify(validated.options),
                        brand: 'lenovo',
                    }     
                })
                

            } catch (error) {
                console.error("Validation error:", error);
                return;
            }
            
        })
    }
}
