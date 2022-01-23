class ResponseFormatter {
    static formatPodcastList(response = {}) {
        const { feed: { entry } } = response;

        return entry.map(
            (podcast) => ({
                name: podcast["im:name"].label,
                image: podcast["im:image"][0].label,
                author: podcast["im:artist"].label,
                id: podcast.id.attributes["im:id"]
            })
        );
    }

    static formatEpisodeList(response = {}) {

    }
}

export default ResponseFormatter;