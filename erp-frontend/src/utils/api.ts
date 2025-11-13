import axios, { AxiosError } from "axios";
import { ApiError } from "src/models/Api";

const BASE_URL = 'http://localhost:8000/api/v1';

export const useApi = async <TypeDataResponse>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    data?: object,
    withAuth: boolean = true
): Promise<{
    data?: TypeDataResponse,
    detail: string
}> => {
    // Lógica de autenticação
    const access_token = localStorage.getItem('AUTH_ACCESS');

    let headers = {};
    if (withAuth && access_token) {
        headers['Authorization'] = `Bearer ${access_token}`;
    }

    try {
        const request = await axios(`${BASE_URL}/${endpoint}`, {
            method,
            data: method != 'GET' && data,
            params: method == 'GET' && data,
            headers
        })

        return {
            data: request.data,
            detail: ''
        }
    } catch (e) {
        const error = e as AxiosError<ApiError>;

        // Verificar se o erro é 401 (não autorizado) - token expirado ou inválido
        if (error.response?.status === 401) {
            // Remover o token inválido
            localStorage.removeItem('AUTH_ACCESS');
            
            // Redirecionar para a página de login
            window.location.href = '/signin';
            
            return {
                data: null,
                detail: 'Sessão expirada. Redirecionando para o login...'
            }
        }

        return {
            data: null,
            detail: error.response?.data?.detail || error.message
        }
    }
} 