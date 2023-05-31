import {$authHost, $host} from "./index";

export const addDeviceToCart = async (item) => {
    const {data} = await $authHost.post('api/basket', item)
    return data
}