export const urlChecker = (url: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const REGEX: RegExp = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
    return Boolean(url.match(REGEX));
}
