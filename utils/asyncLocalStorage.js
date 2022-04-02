export const asyncLocalStorage = {
    setItem: async (key, value) => {
        await null;
        localStorage.setItem(key, value);
    },
    getItem: async () => {
        await null;
        return localStorage.getItem(key);
    },
    removeItem: async () => {
        await null;
        return localStorage.removeItem(key)
    }
};
