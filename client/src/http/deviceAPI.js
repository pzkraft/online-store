import {$authHost, $host} from "./index";

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
