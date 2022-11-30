import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Laptop Showcase`;
    },[title])
}
export default useTitle;