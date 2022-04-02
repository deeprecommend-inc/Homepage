import ky from 'ky';

const endPoint = 'https://zenn.dev/'

export const zennApi = {
    get: async () => {
        const html = await ky('', { prefixUrl: endPoint }).text();
        const dom = new DOMParser().parseFromString(html, "text/html");
        const data = dom.getElementById("__NEXT_DATA__");

        return JSON.parse(data.innerText);;
    },
};

export default zennApi;
