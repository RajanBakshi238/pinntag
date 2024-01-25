import { axiosInstance } from "../config/axiosInstance"

export const getData = async (END_POINT) => {
    let response = await axiosInstance.get(END_POINT);

    return {
        data: response.data,
        error: response.data.error
    }
}