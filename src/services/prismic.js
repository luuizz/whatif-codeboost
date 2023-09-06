import { createClient } from "@prismicio/client";

export function getPrismicClient() {
    const prismic = createClient("codeboost-whaif", {
        accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
    });
    return prismic;
}