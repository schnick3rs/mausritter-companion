import CreaturesService from '~/server/services/creaturesServiceDb';

// @ts-ignore
export default defineEventHandler(() => {
    return CreaturesService.findAll();
})
