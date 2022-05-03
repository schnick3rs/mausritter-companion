import CreaturesService from '~/server/services/creaturesService';

// @ts-ignore
export default defineEventHandler(async () => {
    return await CreaturesService.findAll();
})
