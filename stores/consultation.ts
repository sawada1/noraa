import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
interface ApiResponse<T> {
    data: T;
}
interface Blogs {
    id: number;
    title: string;
    short_description: string;
    fully_description: string;
    created_at: string;
    image: string;
}
interface TypesData {
    id: number;
    name: string;
}
interface Quizzes{
    id: number;
    title: string;
    description: string;
}
interface Consultation {
    id: number;
    consultaion_type_id: number;
    title: string;
    description: string;
    image: string;
    quizzes: Quizzes[]
}
export const useConsultationStore = defineStore('Consultation', {
    state: () => ({
        types: [] as TypesData[],
        slots: [] as String[],
        activeType:1,
        quizzes: {} as Quizzes,
        nextQuiz: false,
        time:"",
        date:"",
        dataConsultation: {} as Consultation
    }),
    getters: {

    },
    actions: {
        async getTypes() {
            try {
                const api = useApi();
                const response = await api.get<ApiResponse<TypesData[]>>('consultationtype');
                if (response.data) {
                    this.types = response.data.data;
                }
            } catch (error) {
                console.log(error);

            }
        },
        async getData(id: any) {
            try {
                const api = useApi();
                const response = await api.post<ApiResponse<Consultation>>(`filter_consultation_page`, {consultaion_type_id: id});
                if (response.data) {
                    this.dataConsultation = response.data.data;
                    this.quizzes = response.data.data.quizzes[0]
                }
            } catch (error) {
                console.log(error);

            }
        },
        async getTime(id: any, date: string) {
            try {
                const api = useApi();
                const response = await api.post<ApiResponse<String[]>>(`filter_consultation`, { consultaion_type_id: id, date: date });
                if (response.data) {
                 this.slots = response.data.data;
                }
            } catch (error) {
                console.log(error);

            }
        },
    }
});