import { http } from '@/boot/axios';
// @ts-ignore
import router from '@/router/index.ts'

// GET
export const GetRequest = async (url: string, params?: object, noAlert?: boolean, timeout?: number)=> {
    return await Request(url, 'GET', undefined, params, noAlert, timeout)
}

// POST
export const PostRequest = async (url: string, data?: object, noAlert?: boolean, timeout?: number) => {
    return await Request(url, 'POST', data, undefined, noAlert, timeout)
}

// PUT
export const PutRequest = async (url: string, data?: object, noAlert?: boolean, timeout?: number) => {
    return await Request(url, 'PUT', data, undefined, noAlert, timeout)
}

// DELETE
export const DeleteRequest = async (url: string, params?: object, noAlert?: boolean, timeout?: number) => {
    return await Request(url, 'DELETE', undefined, params, noAlert, timeout)
}

export const isLogin = (token: string | null ): boolean => {
    return !token
}


const Request = async (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: object, params?: object, noAlert?: boolean, timeout?: number) => {
    try {
        let res, data

        switch (method) {
            case 'POST':
                res = await http.post(url, body, { headers: { 'Content-Type': 'application/json' }, params, timeout })
                break
            case 'PUT':
                res = await http.put(url, body, { headers: { 'Content-Type': 'application/json' }, params, timeout })
                break
            case 'DELETE':
                res = await http.delete(url, { params, timeout })
                break
            default:
                res = await http.get(url, { params, timeout })
        }

        data = res.data
        // @ts-ignore
        let message

        if (!data) {
            await router.push('/500')
        }

        if (data.error) {
            message = data.error
        }

        if (data.success === false) {
            if (data.statusCode === 401) {
                if (window.location.pathname !== '/sign-in') {
                    await router.push('/sign-in')
                    return
                } else {
                    return data
                }
            }

            if (noAlert) return data
            message = data.message
        }

        return data
    } catch (error: any) {
        if (error.message && error.message !== 'canceled') {
            if (import.meta.env.VITE_DEBUG_MODE === 'true') {
                await router.push('/500')
            }
        }
    }
}
