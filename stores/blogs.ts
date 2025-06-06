import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
interface ApiResponse<T> {
    data: T;
}

interface Vendor{
    id: number;
    image: string;
    name: string;
}

interface Comments{
    created_at: string;
    description: string;
    id: number;
    article_id: number;
    vendor_id: number;
    vendor: Vendor;
}
interface Blogs{
    id: number;
    title: string;
    short_description: string;
    fully_description: string;
    created_at: string;
    image: string;
}
interface Blog{
    id: number;
    title: string;
    short_description: string;
    fully_description: string;
    created_at: string;
    image: string;
    comments: Comments[];
}
export const useBlogsStore = defineStore('blogs', {
    state: () => ({
        blogs: [] as Blogs[],
        lengthBlogs: false,
        pendingBlogs: false,
        pendingBlog: false,
        blog: {} as Blog
    }),
    getters: {

    },
    actions: {
        async getBlogs(author?:any , date?: any) {
            try {
                this.lengthBlogs = false;
                this.pendingBlogs = true;
                const api = useApi();
                const response = await api.get<ApiResponse<Blogs[]>>('blogs' , {params:{author_id: author , date:date}});
                if(response.data){
                    this.blogs = response.data.data;
                    this.pendingBlogs = false;
                    if(this.blogs.length === 0){
                        this.lengthBlogs = true;
                    }
                }
            } catch (error) {
              console.log(error);
              
            }
        },
        async getBlog(id:any) {
            try {
                this.pendingBlog = true;
                const api = useApi();
                const response = await api.get<ApiResponse<Blog>>(`blogs/${id}`);
                if(response.data){
                    this.pendingBlog = false;
                    this.blog = response.data.data;
                }
            } catch (error) {
              console.log(error);
              
            }
        },
        async createComment(id:any , obj: any) {
            try {
                const api = useApi();
                const response = await api.post(`blogs/createComment`,{article_id: id , comment: obj.comment});
                if(response.data){
                    obj.comment = '';
                    this.getBlog(id);
                }
            } catch (error) {
              console.log(error);
              
            }
        },
    }
});