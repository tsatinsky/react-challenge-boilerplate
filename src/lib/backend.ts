import axios, {Method} from "axios";

export abstract class AbstractBackend {
    abstract authenticate(userName: string, password: string): Promise<AbstractBackend>;
    abstract request(method: Method, path: string): Promise<any>
}

export class Backend implements AbstractBackend{
    private accessToken: string = "";
    private readonly baseUrl: string;

    constructor(domain: string) {
        this.baseUrl = `https://${domain}`;
    }

    async authenticate(userName: string, password: string) {
        const formData = new FormData();
        formData.append("username",  userName);
        formData.append("password",  password);
        formData.append("grant_type", "password");
        const loginResult = await axios( {
            method: "post",
            url: "/auth/login",
            data: formData,
            baseURL: this.baseUrl,
            headers: { "Content-Type": "multipart/form-data" }}
        );

        this.accessToken = loginResult.data.accessToken;
        return this;
    }

    async request(method: Method, path: string) {
        if (!this.accessToken) {
            throw new Error("Cannot requests before authentication");
        }
        const response = await axios({
            method: method,
            url: path,
            baseURL: this.baseUrl,
            headers: {
                authorization: `Bearer ${this.accessToken}`
            },
        });
        return response.data;
    }
}