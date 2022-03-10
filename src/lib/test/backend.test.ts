import mock from 'xhr-mock';

import {Backend} from "../backend";

describe("backend", () => {
    beforeEach(() => mock.setup());
    afterEach(() => mock.teardown());

    function mockLoginAPI() {
        mock.post('https://www.domain.xyz/auth/login', {
            status: 201,
            body: {
                accessToken: "123token"
            }
        });
    }

    it("does the login request with credentials", async () => {
        expect.assertions(2);
        mock.post('https://www.domain.xyz/auth/login', (req, res) => {
            expect(req.headers()).toEqual({
                accept: "application/json, text/plain, */*",
                "content-type": "multipart/form-data; boundary=----XHRMockFormBoundary"
            });
            expect(Object.fromEntries(req.body())).toEqual({
                "username": "usr",
                "password": "pass",
                "grant_type": "password"
            });
            return res.status(201).body('{"accessToken":"token"}');
        });

        return new Backend("www.domain.xyz").authenticate("usr", "pass");
    });

    it("gets the auth token and uses it in request header", async () => {
        expect.assertions(1);

        mockLoginAPI();
        mock.get('https://www.domain.xyz/test', (req, res) => {
            // expect token to be used in header
            expect(req.headers()).toEqual({
                accept: "application/json, text/plain, */*",
                authorization: "Bearer 123token",
            })
            return res;
        });

        const backend = await new Backend("www.domain.xyz").authenticate("usr", "pass");
        backend.request("get", "/test")
    });

    it("does the request and returns response JSON", async () => {
        expect.assertions(1);

        mockLoginAPI();
        mock.get('https://www.domain.xyz/test', {
            status: 200,
            body: {"data": "123456"}
        });

        const backend = await new Backend("www.domain.xyz").authenticate("usr", "pass");
        const testResponse = await backend.request("get", "/test");

        expect(testResponse).toEqual({"data": "123456"})
    });

    it("throws an error when request is called before authentication", async () => {
        mockLoginAPI();

        const backend = await new Backend("www.domain.xyz")

        await expect(backend.request("get", "/test"))
            .rejects
            .toThrow("Cannot requests before authentication");
    });
});
