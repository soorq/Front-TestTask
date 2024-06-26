import axios from 'axios';

export const fetcher = async (url: string) =>
    await axios.get(url).then(data => data.data);
