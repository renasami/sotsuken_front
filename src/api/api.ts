const env = import.meta.env.MODE 
type Status = {
    status: number
}
export async function fetchJSON<T>(path: string, options: RequestInit): Promise<T> {
    if (env === "development") path = `http://hogehoge.com/${path}`
    else path = `http://localhost:8080/${path}`
    const res = await fetch(path, options)
    
    return (await res.json()) as T
  }
  
  export async function fetchJSONOrNull<T>(
    path: string,
    options: RequestInit,
    allowedStatusCodes?: number[],
  ): Promise<T | Status| null> {
    if (env === "development") path = `http://hogehoge.com/${path}`
    else path = `http://localhost:8080/${path}`
    allowedStatusCodes = allowedStatusCodes || [404]
    const res = await fetch(path, options)
  
    if (res.status === 404) {
      return null
    }
    if (allowedStatusCodes.includes(res.status)){
        return {status:res.status} as Status
    }
  
    return (await res.json()) as T
  }

