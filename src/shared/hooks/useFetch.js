import { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
// import PostService from '../../services/PostService';

export default function useFetch(api, method, body = null) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let service;
  if (api === 'User') {
    service = UserService;
  }
  //   if (api === 'Post') {
  //     service = PostService;
  //   }

  const fetchUrl = async () => {
    let response;
    if (method === 'GET') {
      response = await service.getUsers();
    }
    if (method === 'POST') {
      response = await service.addUser(body);
    }
    if (response.error) {
      setError(response.error);
    }

    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading, error];
}
