import {Backend} from "./backend";

export default async function getStagingBackend():Promise<Backend> {
    try {
        const userName = process.env.REACT_APP_PRIMER_USER_NAME;
        const password = process.env.REACT_APP_PRIMER_PASSWORD;
        const domain = process.env.REACT_APP_PRIMER_DOMAIN;
        if (!userName || !password || !domain) {
            throw new Error("User name, password or domain not defined in environment variable")
        }

        return new Backend(domain).authenticate(userName, password)
    } catch (e:any) {
        if (e?.response?.data?.error?.description) {
            console.error(`${e.message} ${e.response.data.error.description}`);
        } else {
            console.error(e.toString());
        }
        throw e;
    }
}