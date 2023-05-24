import {$authHost, $host} from "./index";

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const deleteBrand = async (toDeleteName) => {
    const {data} = await $authHost.delete('api/brand',{data : {toDeleteName}})
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const fetchOneBrand = async () => {
    const {data} = await $host.get('api/brand/' + id)
    return data
}