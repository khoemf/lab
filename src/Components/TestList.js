import { useState } from 'react';
import * as React from 'react';
import { Container,Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';

export default function TestList2(){
  const [isOpen, setIsOpen] = useState(true);

  
  const handleClickTest = userInput => event =>{
    event.preventDefault();
    console.log("inside handle Click receive " + userInput);
  }
  return(
  <>
  <Box>
    <input type="button" value="Click!!" name="Click Click" onClick={(e) => handleClickTest('faifai')}/>
    <List>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemText primary="Inboxss" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={()=>{setIsOpen((v)=>!v)}}>
        <ListItemText primary="111" />
        {isOpen?"Open":"CLOSE"}
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={()=>{console.log("faifai")}}>
        <ListItemText primary="3333" />
        Click here!!
        </ListItemButton>
        
      </ListItem>
      <Collapse in={isOpen}>
      <ListItem disablePadding>
        <ListItemButton divider>
        <ListItemText primary="333311" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton divider>
        <ListItemText primary="3333222" />
        </ListItemButton>
      </ListItem>
      </Collapse>
      <ListItem disablePadding>
        <ListItemButton divider>
        <ListItemText primary="3333111111" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton divider>
        <ListItemText primary="33332222222" />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
  </>
  )
}



function TestList() {
  return (
    <>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List aria-labelledby="nested-list-subheaderaa"
        subheader={
          <ListSubheader component="div" id="nested-list-subheaderaa">
            Nested List Items
          </ListSubheader>
        }>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inboxss" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Draftss" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    <hr/>
    <hr/>
    <NestedList/>
    </>
    
  );
}


function NestedList() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >

<ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inboxss" />
            </ListItemButton>
          </ListItem>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mails" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Draftss" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inboxs" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout={5000} unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starredsaa!" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="2Starredsaa!" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mailsXXXYYY" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="DraftssXXXYYY" />
        </ListItemButton>
      </List>
    );
  }
  