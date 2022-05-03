import CreaturesService from "~/server/services/creaturesService";

// @ts-ignore
export default defineEventHandler(async (event) => {
    const {slug} = event.context.params;
    return await CreaturesService.findBySlug(slug);
})
