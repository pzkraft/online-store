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

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}
// delete brand
export const deleteBrand = async (toDeleteName) => {
    const {data} = await $authHost.delete('api/brand',{data : {toDeleteName}})
    return data
}
/////////

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const fetchOneBrand = async () => {
    const {data} = await $host.get('api/brand/' + id)
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}
// delete device
export const deleteDevice = async (toDeleteId) => {
    const {data} = await $authHost.delete('api/device', {data: {toDeleteId}})
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 10) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
