import CreaturesService from '$lib/creaturesService';

/** @type {import('./bestiary/[slug]').RequestHandler} */
export async function get({ params }) {
    // `params.slug` comes from [slug].js
    const creature = await CreaturesService.findBySlug(params.slug);

    return {
        body: { creature }
    };
}
