import instance from "../axios-instance";

export const searchByKeyword = (keyword: string | undefined = '') => {
    return instance.get(`/search/users?q=${keyword}`);
}