import React, { useContext, useState } from 'react';
import { Box, Button, Header, Text, Menu, Nav, ResponsiveContext, Tip } from 'grommet';
import { Hpe as HpeIcon, Slack as SlackIcon } from 'grommet-icons';

function goNav(url) {
  window.parent.location.href = url;
}

const items = [
  { label: 'Home', 
    onClick: () => { goNav('/') } ,
    tooltip: 'Status Central home...'  
  },
  { label: 'History', 
    onClick: () => { goNav('/history') } ,
    tooltip: "View complete history..." 
  },
  { label: 'Report Issue', 
    onClick: () => { goNav('/') } ,
    tooltip: 'Notify us of any issue...' 
  },  
  { 
    icon: (<SlackIcon color="plain" size="large" />),
    onClick: () => { goNav('slack://channel?team=E01LD9FH0JZ&id=C077A03GF8C') } ,
    tooltip: 'Access global support Slack channel...' 
  },
];

const AppHeader = () => {

  const size = useContext(ResponsiveContext);
  const [focused] = useState(false);
  //const [focused, setFocused] = useState(false);


  return (
    <Header fill="horizontal" pad={{ horizontal: 'medium' }} background="background-front">
      <Tip content="Status Central home...">
        <Button onClick={() => { goNav("/"); }}>
          <Box direction="row" align="start" gap="medium" pad={{ vertical: 'small' }} responsive={false}>
            <Box height="24px" justify="center">
              <HpeIcon color="brand"/>
            </Box>
            {(!['xsmall', 'small'].includes(size) ||
              (['xsmall', 'small'].includes(size) && !focused)) && (
              <Box direction="row" gap="xsmall" wrap>
                <Text color="text-strong" weight="bold">HPE</Text>
                <Text color="text-strong">Status Central</Text>
              </Box>
            )}
          </Box>
        </Button>
      </Tip>
      {!['xsmall', 'small'].includes(size) ? (
        <Nav direction="row" gap="small">
          {items.map(item => (
            <Tip content={item.tooltip}>
              <Button label={item.label}
                      icon={item.icon}
                      key={item.label} 
                      onClick={item.onClick}/>
            </Tip>  
          ))}
        </Nav>
      ) : (
        <Menu label="Menu" items={items} /> 
      )}
    </Header>
  );
};

export { AppHeader as Header };
