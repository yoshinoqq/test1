import API from "./api"

const getImages = async () => {
    const {data} = await API.get('/images')
    return data;

}
export default getImages;