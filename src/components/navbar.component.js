import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import { useHistory } from 'react-router-dom';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#0B0C10",
    zIndex: 100,
  },
});

const SimpleBottomNavigation = (props) => {
  const { user, handleLogout } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  useEffect(() => {
    if(value === 0)
        history.push("/discover")
    else if(value ===1 )
        history.push("/discover/favourites")
    else if(value ===2 )
        history.push("/discover/latest")
    else if(value ===3 )
        history.push("/login")        
        
  }, [value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={()=>{history.push("/discover/")}} style={{color: "white"}} label="Discover" icon={<LineWeightIcon />} />
      {
        !user ? (
          null
        ) :
        (          
          <BottomNavigationAction onClick={()=>{history.push("/discover/favourites")}} style={{color: "white"}} label="Favourites" icon={<FavoriteIcon />} />
        )
      }
      <BottomNavigationAction onClick={()=>{history.push("/discover/latest")}} style={{color: "white"}} label="Latest" icon={<FiberNewIcon />} />
      {
        !user ? (
          <BottomNavigationAction style={{color: "white"}} label="Login" icon={<ExitToAppIcon />} />
        ) : 
          <BottomNavigationAction style={{color: "white"}} onClick={()=>{handleLogout();}} label="Logout" icon={<ExitToAppIcon />} />
        
      }
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
