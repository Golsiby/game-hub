const getCroppetImageUrl = (url: string) => {
    if (!url) return '';
    const token = 'media/';
    const index = url.indexOf(token) + token.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppetImageUrl;