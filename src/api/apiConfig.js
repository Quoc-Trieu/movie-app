const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f93c2418dcee4de0395cb0846b184728',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;