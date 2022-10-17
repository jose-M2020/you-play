import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction, loading }) => {

  // if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {(loading ? Array.from(new Array(15)) : videos).map((item, idx) => (
        <Box key={idx}>
          {item?.id?.channelId ?(
            <ChannelCard channelDetail={item} />
          ):(
            <VideoCard video={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;