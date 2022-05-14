export const useGetByTagName = () => {
    const getByTagName = (dataFromQiita, tagName) => {
        return dataFromQiita.filter((o) =>
            o.tags.map((tag) => tag.name).includes(tagName),
        );
    };

    return { getByTagName };
};
