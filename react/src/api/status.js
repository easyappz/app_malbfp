import instance from './axios';

export async function getStatus() {
  const res = await instance.get('/api/status');
  return res.data;
}

export default { getStatus };
