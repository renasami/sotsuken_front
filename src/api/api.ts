
export async function fetchJSON<T>(path: string, options: RequestInit): Promise<T> {
    if (import.meta.env.MODE === "development") path = `http://hogehoge.com/${path}`
    else path = `http://localhost:8080/${path}`
    const res = await fetch(path, options)
    
    return (await res.json()) as T
  }
  
  export async function fetchJSONOrNull<T>(
    path: string,
    options: RequestInit,
    allowedStatusCodes?: number[],
  ): Promise<T | null> {
    if (import.meta.env.MODE === "development") path = `http://hogehoge.com/${path}`
    else path = `http://localhost:8080/${path}`
    allowedStatusCodes = allowedStatusCodes || [404]
    const res = await fetch(path, options)
  
    if (res.status === 404 || allowedStatusCodes.includes(res.status)) {
      return null
    }
  
    return (await res.json()) as T
  }

