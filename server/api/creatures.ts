import CreaturesService from '~/server/services/creaturesServiceDb';

// @ts-ignore
export default defineEventHandler(async () => {
    return await CreaturesService.findAll();
})
