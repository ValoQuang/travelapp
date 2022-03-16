import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import {AppBar, ToolBar, Typography, InputBase, Box} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <ToolBar class={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
        <Typography variant="h6" className={classes.title}>
            Explore new places
        </Typography>
        {/* autocomplete from react-google-maps to suggest */}
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
        </Autocomplete>
        {/* autocomplete from react-google-maps to suggest */}
        </Box>
      </ToolBar>
    </AppBar>
  )
}

export default Header