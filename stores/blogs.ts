import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
interface ApiResponse<T> {
    data: T;
}
interface Blogs{
    id: number;
    title: string;
    short_description: string;
    fully_description: string;
    created_at: string;
    image: string;
}
export const useBlogsStore = defineStore('blogs', {
    state: () => ({
        blogs: [] as Blogs[],
        blog: {} as Blogs
    }),
    getters: {

    },
    actions: {
        async getBlogs() {
            try {
                const api = useApi();
                const response = await api.get<ApiResponse<Blogs[]>>('blogs');
                if(response.data){
                    this.blogs = response.data.data;
                }
            } catch (error) {
              console.log(error);
              
            }
        },
        async getBlog(id:any) {
            try {
                const api = useApi();
                const response = await api.get<ApiResponse<Blogs>>(`blogs/${id}`);
                if(response.data){
                    this.blog = response.data.data;
                }
            } catch (error) {
              console.log(error);
              
            }
        },
        async createComment(id:any , comment: string) {
            try {
                const api = useApi();
                const response = await api.post(`blogs/createComment`,{article_id: id , comment: comment});
                if(response.data){
                    
                }
            } catch (error) {
              console.log(error);
              
            }
        },
    }
});