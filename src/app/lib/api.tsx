import axios from "axios";

const API_URL = "http://localhost:3001";

export const courseApi = {
  getCourses: async ({
    page = 1,
    limit = 12,
    search = "",
    category = "",
  }: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
  }) => {
    const params: any = {
      _page: page,
      _limit: limit,
    };

    if (search) params.q = search;
    if (category) params.category = category;

    const response = await axios.get(`${API_URL}/courses`, {
      params,
    });

    return {
      data: response.data,
      total: Number(response.headers["x-total-count"] || 0),
    };
  },

  getCourse: (id: number) => axios.get(`${API_URL}/courses/${id}`),
};
