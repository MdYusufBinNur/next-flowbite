export const getLocalSession = () => {
    return JSON.parse(localStorage.getItem("session") as string);
};
export const removeLocalSession = () => {
    localStorage.removeItem("session");
};