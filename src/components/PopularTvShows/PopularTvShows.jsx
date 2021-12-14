import React,{ useState } from 'react'
import styles from './PopularTvShows.module.css'

//* Importing Tabs
import PopularTv from '../PopularTv/PopularTv';
import TvShow from '../TvShow/TvShow';
import TvSeason from '../TvSeason/TvSeason';

export default function PopularTvShows() {
  const [ tvId, setTvId ] = useState(null);
  const [ seasonId, setSeasonId ] = useState(null)
  const [ episodeId, setEpisodeId ] = useState(null)
  const [ tabIndex, setTabIndex ] = useState(0)
  const components = [ 
                        <PopularTv setTvId={setTvId} setTabIndex={setTabIndex} />,
                        <TvShow tvId={tvId} setTabIndex={setTabIndex} setSeasonId={setSeasonId}/>,
                        <TvSeason tvId={tvId} seasonId={seasonId} setTabIndex={setTabIndex}/>
                    ]

  return (
    <div>
      {components[tabIndex]}
    </div>
  )
}
