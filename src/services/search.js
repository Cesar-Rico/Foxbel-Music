import axios from 'axios';
import config from './config';

const options = {
  params: {q: 'eminem'},
  headers: {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': 'e00af3f28bmshda15bbaa7af0b8dp1569fajsn7b0c38207181'
  }
};

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default async function search(name) {
    console.log('/search?q=track:\"' + name + '\" album:\"' + name + '\"')
    options.params = {
      q: name
    }
  return await axios.get( config.baseURL, options);
}