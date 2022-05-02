import CreaturesService from "~/server/services/creaturesService";

// @ts-ignore
export default defineEventHandler((event) => {
    const {slug} = event.context.params;
    const creature = CreaturesService.findBySlug(slug);
    return creature;
})
