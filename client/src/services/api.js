import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const API_URL = `${BASE_URL}/api/feedback`;

export const api = {
    ingestFeedback: async (feedbacks) => {
        return axios.post(`${API_URL}/ingest`, { feedbacks });
    },
    searchFeedback: async (query) => {
        return axios.post(`${API_URL}/search`, { query });
    },
    getThemes: async () => {
        return axios.get(`${API_URL}/themes`);
    },
    getRecentFeedback: async () => {
        return axios.get(`${API_URL}/`);
    },
    clearFeedback: async () => {
        return axios.delete(`${API_URL}/clear`);
    },
    generateActionItem: async (feedbackText) => {
        return axios.post(`${API_URL}/action-item`, { feedbackText });
    },
    deleteFeedback: async (id) => {
        return axios.delete(`${API_URL}/${id}`);
    },
    competitiveAnalysis: async (ourFeedback, competitorFeedback) => {
        return axios.post(`${API_URL}/competitive-analysis`, { ourFeedback, competitorFeedback });
    },
    // Action Items
    createActionItem: async (data) => {
        return axios.post(`${BASE_URL}/api/action-items`, data);
    },
    getAllActionItems: async () => {
        return axios.get(`${BASE_URL}/api/action-items`);
    },
    updateActionItemStatus: async (id, status) => {
        return axios.patch(`${BASE_URL}/api/action-items/${id}`, { status });
    },
    deleteActionItem: async (id) => {
        return axios.delete(`${BASE_URL}/api/action-items/${id}`);
    },
    submitFeedbackForm: async (feedbackType, description, implementedFeature) => {
        return axios.post(`${BASE_URL}/api/action-items/from-submission`, {
            feedbackType,
            description,
            implementedFeature
        });
    },
    generateImplementationPlan: async (feedbackType, description) => {
        return axios.post(`${BASE_URL}/api/action-items/generate-implementation-plan`, {
            feedbackType,
            description
        });
    }
};
