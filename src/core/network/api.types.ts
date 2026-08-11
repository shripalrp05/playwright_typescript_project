import { ReadStream } from "fs";

export enum BodyType {
    JSON = 'data',
    FORM = 'form',
    MULTIPART = 'multipart',
}

export type MultipartBody = {
    [key: string]: string | number | boolean | ReadStream | { name: string; mimeType: string; buffer: Buffer };
};