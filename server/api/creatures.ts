import CreaturesService from '../services/creaturesService';

// @ts-ignore
export default defineEventHandler(() => {
    return CreaturesService.findAll();
})
