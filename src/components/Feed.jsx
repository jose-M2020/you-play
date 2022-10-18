import { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos, Loader } from "./"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() =>{
    setLoading(true);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => {
        setVideos(data.items)
        setLoading(false)
    })
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d" }}>
        <Sidebar
          class="sidebar"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} 
        />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", textAlign: "center" }}>
          Copyright © 2022 YouPlay
        </Typography>
      </Box>

      <Box p={1} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" ml={1} mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        { <Videos videos={videos} loading={loading} /> }
      </Box>
    </Stack>
  );
}

export default Feed