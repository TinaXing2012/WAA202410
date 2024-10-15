export default interface Comment {
    "rpid": string;
    "user": {
        "uid": string;
        "avatar": string;
        "uname": string;
    },
    "content": string;
    "ctime": string;
    "like": number;
}