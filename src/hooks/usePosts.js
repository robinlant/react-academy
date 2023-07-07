import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort ==='id') {
            return [...posts].sort((a,b) => a-b)
        }
        if (sort) {
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    },[posts,sort])
    return sortedPosts;
}
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort, query)

    const searchedAndSortedPosts = useMemo( () => {
            return sortedPosts.filter((post) => {
                return post.title.toLowerCase().includes(query.toLowerCase())
            })
        }, [query,sort,sortedPosts]
    )
    return searchedAndSortedPosts;
}