import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromApi } from '../Utils/FetchFromApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {

  const { id } = useParams();
  const [channelDetail , setChannelDetail] = useState(null)
  const [videos , setVideos] = useState([])

  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await FetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
    
  },[id])


  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,38,1) 47%, rgba(3,0,255,1) 100%)",
          zIndex : 10,
          height : '300px'
        }}>
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
      </Box>
        <Box display='flex' p='2'>
          <Box 
          sx={{mr:{sm: '100px'}}}
          />
          <Videos videos={videos} />
        </Box>
    </Box>
  )
}



export default ChannelDetail