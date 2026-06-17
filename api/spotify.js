export default async function handler(req, res) {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

    try {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refresh_token,
            }),
        });

        const data = await response.json();
        const access_token = data.access_token;

        const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5`;
        
        const tracksResponse = await fetch(TOP_TRACKS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const tracksData = await tracksResponse.json();

        res.status(200).json(tracksData);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do Spotify' });
    }
}