import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}
// delete type TODO .delete doesn't have data in props (AXIOS delete)
export const deleteType = async (toDeleteName) => {
    const {data} = await $authHost.delete('api/type',{data : {toDeleteName}})
    return data
}
/////
export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}