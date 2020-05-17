import Server from '@/server/index';

const { axiosInstance } = Server;


export default {
  async getAllGroups() {
    return axiosInstance.get('/group?per_page=20');
  },
  async getGroup(slug) {
    return axiosInstance.get(`/group/${slug}`);
  },
};
