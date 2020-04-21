import axios from 'axios';

const API_KEY = '05fa9ceff0mshcd26d5c061d6eebp13ef76jsn578cd28223c0';

const request = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 30000,
    headers: {'X-RapidAPI-Key': API_KEY}
});

export function getAlbums(search = 'madona'){
    const albums = request.get(`search?q=${search}`)
                    .then(response => response.data.data)
                    .catch(error => console.log(error));
    return albums;
}

export function getAlbum(id){
    const album = request.get(`album/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error));
return album;
}

export function getFavoriteAlbums(){
    const albums = localStorage.getItem('favorites')
return albums;

}