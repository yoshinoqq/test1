import API from "./api"

const postComment = async (currentImageId, comment) => {
    const {data} = await API.post(`/image/${currentImageId}/comments`, comment )
    return data;

}
export default postComment;