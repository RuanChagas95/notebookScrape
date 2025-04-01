import { Details } from "../types";

export class DetailsValidator implements Details {
    public title: string;
    public price: string;
    public description: string;
    public image: string;
    public rating: number;
    public options: Record<string, string[]>;
    public reviewCount: number;
    public link: string;
    constructor(private details: any) {
        this.validate();
        this.title = details.title;
        this.price = details.price;
        this.description = details.description;
        this.image = details.image;
        this.rating = details.rating;
        this.options = details.options;
        this.reviewCount = details.reviewCount;
        this.link = details.link;
    }

    validate() {
        const { title, price, description, image, rating } = this.details;
        if (!title || !price || !description || !image || !rating) {
            throw new Error("Missing required fields");
        }

        if (Number.isNaN(this.reviewCount)) {
            throw new Error("Review count must be a number");
        }

        if (typeof title !== "string" || typeof description !== "string") {
            throw new Error("Title and description must be strings");
        }
        if (typeof price !== "string") {
            throw new Error("Price must be a string");
        }
        if (typeof image !== "string") {
            throw new Error("Image must be a string");
        }
        if (typeof rating !== "number") {
            throw new Error("Rating must be a number");
        }

    }

    get(): Details {
        return {
            title: this.title,
            price: this.price,
            description: this.description,
            image: this.image,
            rating: this.rating,
            options: this.options,
            reviewCount: this.reviewCount,
            link: this.link
        };
    }
}
