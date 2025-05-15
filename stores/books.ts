import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
interface ApiResponse<T> {
    data: T;
}

interface Book{
    id: number;
    image: string;
    short_description: string;
    created_at: string;
    title: string;
}
interface BooksData {
    Best_Seller: Book[];
    books: Book[];
  
}

interface AuthorData {
    id: number;
    image: string;
    name: string;
    description: string;
}

interface Rates{
rate: number;
percentage: number;
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
    vendor_id: number;
    vendor: Vendor;
    rate?: number | string
}

interface BookDetail{
    author: AuthorData;
    id: number;
    image: string;
    title: string;
    short_description: string;
    fully_description: string;
    created_at: string;
    images: string[];
    comments_count: number;
    rate_percentage: Rates[];
    rate_count: number;
    comments: Comments[]
}
export const useBooksStore = defineStore('books', {
    state: () => ({
        books: {} as BooksData,
        slots: [] as String[],
        lengthBooks: false,
        comments:[],
        pendingLoader: false,
        pendingBook: false,
         totalRecords : 100, // Replace with your dynamic total count
         rows : 10, // Number of items per page
         page : 1, // Active page number (starting from 1)
        closePdf:false,
        BookData: {} as BookDetail
    }),
    actions: {
        async getBooks() {
            try {
                this.lengthBooks = false;
                this.pendingLoader = true;
                const api = useApi();
                const response = await api.get<ApiResponse<BooksData>>('books');
                if (response.data) {
                    this.pendingLoader = false;
                    this.books = response.data.data;
                    if(this.books.Best_Seller.length === 0){
                        this.lengthBooks = true;
                    }
                }
            } catch (error) {
                console.log(error);

            }
        },
        async getBook(id: any) {
            try {
                this.pendingBook = true;
                const api = useApi();
                const response = await api.get<ApiResponse<BookDetail>>(`books/${id}`);
                if (response.data) {
                    this.pendingBook = false;
                    this.BookData = response.data.data;
                }
            } catch (error) {
                console.log(error);

            }
        },
        async getComments(id: any) {
            try {
                this.pendingBook = true;
                const api = useApi();
                const response = await api.get(`books/comments/${id}`,{params:{
                    id: this.page
                }});
                if (response.data) {
                    this.pendingBook = false;
            this.comments = response.data?.data;
        this.totalRecords = response.data?.meta?.total;
        this.rows = response.data?.meta?.per_page;
                }
            } catch (error) {
                console.log(error);

            }
        },
        async createComment(id: any, obj: any) {
            try {
                const api = useApi();
                const response = await api.post(`books/createComment`, { book_id: id, comment: obj.comment , rate: obj.star });
                if (response.data) {
                 obj.comment = '';
                 obj.star = 1;
                 this.getComments(id);
                }
            } catch (error) {
                console.log(error);

            }
        },
    }
});