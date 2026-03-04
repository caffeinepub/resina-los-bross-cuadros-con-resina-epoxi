import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface StudioInfo {
    email: string;
    address: string;
    phone: string;
    distribution: string;
}
export interface AboutSection {
    title: string;
    content: string;
}
export interface ResinArtPiece {
    id: string;
    title: string;
    resinThickness?: bigint;
    description: string;
    isVanGogh: boolean;
    isTriptych: boolean;
    image: ExternalBlob;
    isNew: boolean;
    frameMaterial?: string;
    isFragmented: boolean;
    resinEffect: boolean;
}
export interface backendInterface {
    addResinArtPiece(id: string, title: string, description: string, image: ExternalBlob, resinEffect: boolean, resinThickness: bigint | null, frameMaterial: string | null, isTriptych: boolean, isFragmented: boolean, isVanGogh: boolean, isNew: boolean): Promise<void>;
    getAboutSection(): Promise<AboutSection | null>;
    getAllResinArtPieces(): Promise<Array<ResinArtPiece>>;
    getResinArtPiece(id: string): Promise<ResinArtPiece | null>;
    getStudioInfo(): Promise<StudioInfo | null>;
    setAboutSection(title: string, content: string): Promise<void>;
    setStudioInfo(phone: string, email: string, address: string, distribution: string): Promise<void>;
}
