import { includes } from "lodash-es"

export const useGetByTagName = () => {
    const getByTagName = (dataFromQiita, tagName) => {
        return dataFromQiita.filter(o => includes(o.tags.map(tag => tag.name), tagName));
    }

    return { getByTagName }
}