import CreaturesService from '$lib/creaturesService';

/** @type {import('./creatures').RequestHandler} */
export async function get() {
    const creatures = await CreaturesService.findAll();

    return {
        body: { creatures }
    };
}
