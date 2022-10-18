import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Skeleton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setVideos(data.items);
        setLoading(false)
      })
  }, [id]);

  // if(!videoDetail?.snippet) return <Loader />;

  // const { 
  //   snippet: { title, channelId, channelTitle }, 
  //   statistics: { viewCount, likeCount } 
  // } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack ml={2} direction={{ xs: "column", md: "row" }}>
        <Box pr={2} pt={2} flex={1}>
          <Box sx={{ width: "100%"}}>
            { videoDetail ? (
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" playing={true} controls />
            ):(
              <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)', height: '90vh' }} animation="pulse" /> 
            )}

            {videoDetail ? (
              <Box sx={{ borderBottom: '1px solid #5f5f5f' }} pb={2}>
                <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                  {videoDetail?.snippet?.title}
                </Typography>
                <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                  <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                    <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                      {videoDetail?.snippet?.channelTitle}
                      <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                  </Link>
                  <Stack direction="row" gap="20px" alignItems="center">
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ):(
              <Box sx={{ borderBottom: '1px solid #5f5f5f' }} pb={2}>
                <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)', marginBottom: '1rem' }} width="60%" />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} width="30%"/>
                  <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} width="40%"/>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        <Box pr={2} pt={2} justifyContent="center" alignItems="center" sx={{ width: {
                  sm: '100%',
                  md: '30%',
                } }} >
          <Videos videos={videos} loading={loading} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;