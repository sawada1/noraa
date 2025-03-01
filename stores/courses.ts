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

interface VideosDetails{
    title:string;
    video_path:string;
}
interface VideosData{
    course: string;
    videos: VideosDetails[];
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
        videos:{} as VideosData,
        pendingVideos:false,
        pendingCourses: false,
        slots: [] as String[],
        lengthCourses: false,
        lengthVideos: false,
        CourseData: {} as CourseDetail
    }),
    actions: {
        async getCourses() {
            try {
                this.pendingCourses = true;
                this.lengthCourses = false;
                const api = useApi();
                const response = await api.get<ApiResponse<CoursesData[]>>('courses');
                if (response.data) {
                    this.pendingCourses = false;
                    this.courses = response.data.data;
                    if(this.courses.length == 0){
                        this.lengthCourses = true
                    }
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
        async getVideos(id: any) {
            try {
                this.pendingVideos = true;
                this.lengthVideos = false;
                const api = useApi();
                const response = await api.get<ApiResponse<VideosData>>(`course/lectures/${id}`);
                if (response.data) {
                    this.pendingVideos = false;
                    this.videos = response.data['0'];
                    // if(response.data.data.length === 0){
                    //     this.lengthVideos = true;
                    // }
                }
            } catch (error) {
                console.log(error);

            }
        },
    }
});