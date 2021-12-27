import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '410b1eb2d5mshd4df9ba941fd0d8p1c19fejsnf0f49c338256'
          }
    });

    return data;
}