const api = 'RGAPI-18b95a10-3a4b-45e7-9ec9-dabacf38977a';
// Remember to remove when pushing to GitHub !! TODO


// https://ddragon.leagueoflegends.com/api/versions.json -> versions link


export async function getUserBySummonerName(name) {
    return (await fetch(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${api}`)).json();
}

export async function getIconById(id) {
    return (await fetch(`http://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/27.png`));
}

export async function getMatchById(id) {
    return (await fetch(`https://eun1.api.riotgames.com/lol/match/v4/matches/${id}?api_key=${api}`)).json();
}

export async function getMatchesByEncAccId(id) {
    return (await fetch(`https://eun1.api.riotgames.com/lol/match/v4/matchlists/by-account/${id}?api_key=${api}`)).json();
}

export async function getChampionById(id) {
    return (await fetch(`http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json`)).json();
}