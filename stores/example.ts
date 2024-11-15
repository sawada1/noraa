// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';

interface ExampleItem {
  id: number;
  name: string;
}

interface ExampleStoreState {
  items: ExampleItem[];
  loading: boolean;
  error: string | null;
}

interface Brand {
    id: number;
    name: string;
  }
  
  interface ApiResponse<T> {
    data: T;
  }
  
export const useExampleStore = defineStore('example', {
  state: (): ExampleStoreState => ({
    items: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchItems() {
      this.loading = true;
      this.error = null;
      try {
        let result = await useApi().get<ApiResponse<Brand[]>>('/brands');
        this.items = result.data.data;
      } catch (error: any) {
        this.error = error.message || 'An error occurred while fetching items.';
      } finally {
        this.loading = false;
      }
    },
    async addItem(newItem: ExampleItem) {
      this.loading = true;
      this.error = null;
      try {
        const item = await useApi().post<ExampleItem>('/items', newItem);
        this.items.push(item.data);
      } catch (error: any) {
        this.error = error.message || 'An error occurred while adding an item.';
      } finally {
        this.loading = false;
      }
    },
    async deleteItem(itemId: number) {
      this.loading = true;
      this.error = null;
      try {
        await useApi().delete(`/items/${itemId}`);
        this.items = this.items.filter((item) => item.id !== itemId);
      } catch (error: any) {
        this.error = error.message || 'An error occurred while deleting an item.';
      } finally {
        this.loading = false;
      }
    },
  },
});
