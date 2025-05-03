export const API_ROOT = (import.meta.env.VITE_API_ROOT as string)

export function rest<T>(url: string): Promise<T> {

    return fetch(url, {
        method: 'DELETE',
    }).then((x) => x.json())
}

export function api<T>(action: string): Promise<T> {
    return rest<T>(`${API_ROOT}${action}`)
}
