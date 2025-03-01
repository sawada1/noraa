import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
interface ApiResponse<T> {
    data: T;
}

interface Groups{
    id: number;
    members_count: number;
    image: string;
    title: string;
    description: string;
}
interface Clients{
    id: number;
    image: string;
    name: string;
    last_seen: string;
    status: string;
}
interface GroupsDetails{
    group: Groups;
    clients: Clients[];
}
interface Sender{
    id: number;
    image: string;
    name: string;
}
interface Receivers{
    id: number;
    image: string;
    name: string;
    read_at: string | null
}
interface Messages{
    id: number;
    chat_group_id: number;
    sender_id: number;
    message: string;
    file?: string | null;
    time: string;
    sender: Sender;
    receivers?: Receivers[]
}



export const useChatStore = defineStore('chat', {
    state: () => ({
        groups: [] as Groups[],
        groupDetails: {} as GroupsDetails,
        messages: [] as Messages[],
        pendingGroup: false,
        pendingGroup_details: false,
        lengthChat: false,
    }),
    getters: {

    },
    actions: {
        async getGroups() {
            this.pendingGroup = true;
            try {
                this.lengthChat = false;
                const api = useApi();
                const response = await api.get<ApiResponse<Groups[]>>('available_groups');
                if(response.data){
                    this.pendingGroup = false;
                    this.groups = response.data.data;
                    if(this.groups.length === 0){
                        this.lengthChat = true;
                    }
                }
            } catch (error) {
              console.log(error);
              
            }
        },
        async group_details(id:any) {
            try {
                this.pendingGroup_details = true;
                const api = useApi();
                const response = await api.get<ApiResponse<GroupsDetails>>(`group_details/${id}`);
                if(response.data){
                    this.pendingGroup_details = false;
                    this.groupDetails = response.data.data;
                }
            } catch (error) {
              console.log(error);
              
            }
        },
        async get_messages(id:any) {
            try {
                const api = useApi();
                const response = await api.get<ApiResponse<Messages[]>>(`group/${id}/messages`);
                if(response.data){
                    this.messages = response.data.data;
                }
            } catch (error) {
              console.log(error);
              
            }
        },
        async joinGroup(id:any) {
            let router = useRouter();
            try {
                const api = useApi();
                const response = await api.post(`join_to_group/${id}` , undefined);
                if(response.data){
                    router.push({path:'/conversation' , query:{id: id}});
                }
            } catch (error) {
              console.log(error?.response?.status);
              if(error?.response?.status === 400){
                router.push({path:'/conversation' , query:{id: id}});

              }
              
            }
        },
    }
});