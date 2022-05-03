import CreaturesServiceDeprecated from "~/server/services/creaturesService";

// @ts-ignore
export default defineEventHandler(async (event) => {
    const {slug} = event.context.params;
    return await CreaturesServiceDeprecated.findBySlug(slug);
})
