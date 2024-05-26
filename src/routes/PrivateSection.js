import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Box from '@mui/material/Box';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import HeaderComponent from 'components/header/HeaderComponent';
import PrivateRoutes from './PrivateRoutes';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850
    },
    mainBlock: {
        marginLeft: 255,
        padding: 30,
        '@media (max-width: 1080px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54
    }
});

function PrivateSection() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <SidebarContext>
            <Box className={classes.container}>
                <SidebarComponent />
                <Box flexGrow={1} className={classes.mainBlock}>
                    <HeaderComponent />
                    <div className={classes.contentBlock}>
                        <PrivateRoutes />
                    </div>
                </Box>
            </Box>
        </SidebarContext>
    );
}

export default PrivateSection;
