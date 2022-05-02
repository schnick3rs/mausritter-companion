import CreaturesService from '~/server/services/creaturesServiceDb';

// @ts-ignore
export default defineEventHandler(async (event) => {

    let creatures = await CreaturesService.findAll();

    return creatures;
})
