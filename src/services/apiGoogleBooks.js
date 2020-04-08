import axios from 'axios';

const fetchBookList = async (query) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

  return response.data.items;
};

export default fetchBookList;
