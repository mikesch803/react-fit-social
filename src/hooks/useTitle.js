import { useEffect } from 'react'

export const useTitle = (page) => {
    useEffect(()=>{
        document.title = `Connect | ${page}`
    },[])
}