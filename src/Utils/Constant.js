const AUTH_KEY = "AIzaSyD6kYDWc_czARTqKVhtWd4CovfL7azUYW4"

const MAXVIDEOS = 40


export const YOU_TUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${MAXVIDEOS}&regionCode=US&key=`+AUTH_KEY

export const OFFSET_LIVE_CHAT = 10




