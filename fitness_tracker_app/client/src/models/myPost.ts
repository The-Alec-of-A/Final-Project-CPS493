export const API_ROOT = (import.meta.env.VITE_API_ROOT as string)

export function rest<T>(url: string, item: T): Promise<T> {

    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)}
    ).then((x) => x.json())
}

export function api<T>(action: string, item: T): Promise<T> {
    return rest<T>(`${API_ROOT}${action}`, item)
}
