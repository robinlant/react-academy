import {useMemo} from "react";

export const usePagination = (totalElements, limitOnPage) => {
    const pagesCount = useMemo(() => {
        if (totalElements === 0 || limitOnPage === 0) {
            return 0;
        }
        return Math.ceil(totalElements / limitOnPage)
    }, [totalElements, limitOnPage])

    const pagesArray = useMemo(() => {
        const result = []
        for (let i = 1; i <= pagesCount; i++) {
            result.push(i)
        }
        return result
    }, [pagesCount])
    return [pagesCount, pagesArray]
}

