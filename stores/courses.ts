import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
interface ApiResponse<T> {
    data: T;
}

interface CoursesData {
id: number;
image: string;
title: string;
short_description: string;
  
}

interface VideoData{
    id: number;
    title: string;
    time: string;
}
interface Videos{
    section_name: string;
    videos: VideoData[]
}
interface CourseDetail{
    id: number;
    image: string;
    title: string;
    short_description: string;
    fully_description: string;
    created_at: string;
    price: number | string;
    price_before_discount?: number | string;
    total_count_lecture?: number | string;
    images: string[];
    sections_videos: Videos[],
    outcome: string[]
}
export const useCoursesStore = defineStore('courses', {
    state: () => ({
        courses: [] as CoursesData[],
        slots: [] as String[],
        CourseData: {} as CourseDetail
    }),
    actions: {
        async getCourses() {
            try {
                const api = useApi();
                const response = await api.get<ApiResponse<CoursesData[]>>('courses');
                if (response.data) {
                    this.courses = response.data.data;
                }
            } catch (error) {
                console.log(error);

            }
        },
        async getCourse(id: any) {
            try {
                const api = useApi();
                const response = await api.get<ApiResponse<CourseDetail>>(`courses/${id}`);
                if (response.data) {
                    this.CourseData = response.data.data;
                }
            } catch (error) {
                console.log(error);

            }
        },
    }
});