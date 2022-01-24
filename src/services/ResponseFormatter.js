class ResponseFormatter {
    static formatPodcastList(response = {}) {
        const { feed: { entry } } = response;
        const result = {};

        for (const podcast of entry) {
            const podcastId = podcast.id.attributes["im:id"];

            result[podcastId] = {
                name: podcast["im:name"].label,
                image: podcast["im:image"][0].label,
                largeImage: podcast["im:image"][podcast["im:image"].length-1].label,
                author: podcast["im:artist"].label,
                description: podcast.summary.label,
                id: podcast.id.attributes["im:id"]
            };
        }

        return result;
    }

    static formatEpisodeList(response = {}) {
        const { results: episodeList } = response;
        const result = {};

        episodeList.shift();
        for (const episode of episodeList) {
            result[episode.trackId] = {
                name: episode.trackName,
                releaseDate: episode.releaseDate,
                duration: episode.trackTimeMillis,
                description: episode.description,
                audio: episode.episodeUrl,
                id: episode.trackId
            };
        }

        return result;
    }
}

export default ResponseFormatter;