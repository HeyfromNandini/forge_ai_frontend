// @ts-ignore
import {Agent, AgentResponse} from '../types/agent';
import {AIWorkflow, Workflow, WorkflowResponse} from '../types/workflow';

const API_BASE_URL = 'https://forgeai.onrender.com';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export class ApiService {
    // @ts-ignore
    static async getAgents(): Promise<AgentResponse> {
        try {
            const response = await apiClient.get<AgentResponse>('/agents');
            return response.data;
        } catch (error) {
            console.error('Error fetching agents:', error);
            throw error;
        }
    }

    // New method to fetch a single agent by ID
    // @ts-ignore
    static async getAgentById(agentId: string): Promise<Agent> {
        try {
            const response = await apiClient.get<AgentResponse>(`/agents/${agentId}`);
            // @ts-ignore
            return response.data; // Adjust this based on your API response structure
        } catch (error) {
            console.error(`Error fetching agent with ID ${agentId}:`, error);
            throw error;
        }
    }

    // New method to fetch workflows
    // @ts-ignore
    static async getWorkflows(): Promise<WorkflowResponse> {
        try {
            const response = await apiClient.get<WorkflowResponse>('/workflows');
            return response.data;
        } catch (error) {
            console.error('Error fetching workflows:', error);
            throw error;
        }
    }

    // @ts-ignore
    static async suggestWorkflow(userRequest: string): Promise<AIWorkflow> {
        try {
            const response = await apiClient.post<AIWorkflow>('/suggest-agents', {
                userRequest
            });
            return response.data;
        } catch (error) {
            console.error('Error suggesting workflow:', error);
            throw error;
        }
    }
} 
