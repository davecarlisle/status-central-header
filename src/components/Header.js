import React, { useContext, useState } from 'react';
import { Box, Button, Header, Text, Menu, Nav, ResponsiveContext, Tip } from 'grommet';
import { Hpe as HpeIcon } from 'grommet-icons';

const items = [
  { label: 'Home', 
    url: "/", 
    tooltip: "Go to main status view..." 
  },
  { label: 'Incident History', 
    url: "/history", 
    tooltip: "View complete incident history..." 
  },
  { label: 'Report Issue', 
    url: "/", 
    tooltip: "Notify us of any issue..." 
  },  
  { label: 'Support Channel', 
    url: "/",
    tooltip: "Access global support Slack channel..." },
];

const AppHeader = () => {

  const size = useContext(ResponsiveContext);
  const [focused] = useState(false);
  //const [focused, setFocused] = useState(false);

  return (
    <Header fill="horizontal" pad={{ horizontal: 'medium' }} background="background-front">
      <Tip content="Status Central home...">
        <Button>
          <Box direction="row" align="start" gap="medium" pad={{ vertical: 'small' }} responsive={false}>
            <Box height="24px" justify="center">
              <HpeIcon color="brand"/>
            </Box>
            {(!['xsmall', 'small'].includes(size) ||
              (['xsmall', 'small'].includes(size) && !focused)) && (
              <Box wrap="false">
                <Text color="text-strong" weight="bold">HPE Status Central</Text>
              </Box>
            )}
          </Box>
        </Button>
      </Tip>
      {!['xsmall', 'small'].includes(size) ? (
        <Nav direction="row" gap="small">
          {items.map(item => (
            <Tip content={item.tooltip}>
              <Button label={item.label} key={item.label} href={item.url} />
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
