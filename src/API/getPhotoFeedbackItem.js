import API from "./api"
const getPhotoFeedback = async (currentImageId) => {
    const {data} = await API.get(`/image/${currentImageId}`)
    return data;

}
export default getPhotoFeedback;