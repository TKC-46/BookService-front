import { Book } from "./types";
const API_BASE_URL = process.env.API_BASE_URL;
if (!API_BASE_URL) {
    throw new Error("API_BASE_URL is not defined");
}

export const getAllBooks = async function(): Promise<Book[]> {
    const res = await fetch(`${API_BASE_URL}/books`,{
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("一覧取得中にエラーが発生しました。");
    }

    const books = await res.json();

    return books;
}