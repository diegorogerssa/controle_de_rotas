import axios from 'axios';

export const ListHelpers = async () => {
  const urlHelpers = 'http://localhost:3000/api/listhelpers';
  try {
    const response = await axios.get(urlHelpers);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the helpers!', error);
    return []; // Retorne um array vazio ou lance o erro novamente
  }
};

export const ListDrivers = async () => {
  const urlDrivers = 'http://localhost:3000/api/listdrivers';
  try {
    const response = await axios.get(urlDrivers);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the drivers!', error);
    return []; // Retorne um array vazio ou lance o erro novamente
  }
};

export const List = async (searchParams) => {
  const urlList = `http://localhost:3000/api/list${searchParams}`;
  try {
    const response = await axios.get(urlList);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the list!', error);
    return []; // Retorne um array vazio ou lance o erro novamente
  }
};

export const RegisterList = async (text) => {
  const urlRegisterList = 'http://localhost:3000/api/registerlist';
  try {
    await axios.post(urlRegisterList, text, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  } catch (error) {
    console.error('There was an error registering the list!', error);
  }
};

export const RegisterListUnique = async (text) => {
  const urlRegisterList = 'http://localhost:3000/api/registerunique';
  try {
    await axios.post(urlRegisterList, text, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  } catch (error) {
    console.error('There was an error registering the list!', error);
  }
};