import axios from "axios"

const uploadImage = async(file) => {

    if (!file) return

    const formData = new FormData()
    formData.append('upload_preset', 'curso-vue')
    formData.append('file', file)

    const url = 'https://api.cloudinary.com/v1_1/dfqu0waeg/image/upload'

    const { data } = await axios.post(url, formData)

    console.log(data);

    return data.secure_url


    try {

    } catch (error) {
        console.error('Error al cargar la imagen');
        console.log(error);
        return null
    }
}

export default uploadImage