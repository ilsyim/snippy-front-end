// import * as tokenService from '../services/tokenService'

const Youtube = 'https://www.googleapis.com/youtube/v3'

export async function getServerSideProps() {
  const res = await fetch(`${Youtube}?part=snippet&playlistId=PL2Kp3FX7ViJhG0pEPC-ysHuQEV_KdQItr&maxResults=100&key=${process.env.SECRET_KEY}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}