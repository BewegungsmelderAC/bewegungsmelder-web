import Server from '@/server/index';

const { axiosInstance } = Server;


export default {
  async getAllEvents() {
    return axiosInstance.get('/event?per_page=2');
  },
  async getEvent(slug) {
    return axiosInstance.get(`/event/${slug}`);
  },
};
