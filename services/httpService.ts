import { AxiosRequestConfig, AxiosInstance } from "axios";

import axios from 'axios';

/**
 * @class httpService class
 */
export class httpService {
    requestConfig: AxiosRequestConfig
    axiosInstance: AxiosInstance

    /**
     * Create HTTP Service instance
     * @param axiosConfig AxiosRequestConfig object
     */
    constructor(axiosConfig: AxiosRequestConfig) {
        this.requestConfig = axiosConfig
        this.axiosInstance = axios.create(this.requestConfig)
    }

    /**
     * HTTP POST.
     * Url, body, request configs will be taken from requestConfig properties
     */
    public postTestApi() {
        return this.axiosInstance.post(this.axiosInstance.getUri(this.requestConfig), this.requestConfig.data, this.requestConfig)
    }

    /**
     * HTTP GET.
     * Url, request configs will be taken from requestConfig properties
     */
    public getTestApi() {
        return this.axiosInstance.get(this.axiosInstance.getUri(this.requestConfig), this.requestConfig)
    }
}