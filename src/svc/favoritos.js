import axios from "axios";

const baseURL = "http://localhost:8000/favoritos"

const favoritosAPI = axios.create({ baseURL });

const getFavoritos = async () => {
    const response = await favoritosAPI.get("/");

    return response.data;
}

const postFavoritos = async (id) => {
    await favoritosAPI.post(`/${id}`)
}

const deleteFavoritos = async (id) => {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}