import React from 'react';
import Box from '@mui/material/Box';
import { createUseStyles, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';

const useStyles = createUseStyles((theme) => ({
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    itemValue: {
        color: theme.color.grayishBlue2
    }
}));

function UnresolvedTicketsComponent({ containerStyles }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    function renderStat(title, value) {
        return (
            <Box horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{title}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{value}</span>
            </Box>
        );
    }

    return (
        <CardComponent
            containerStyles={containerStyles}
            title='Unresolved tickets'
            link='View details'
            subtitle='Group:'
            subtitleTwo='Support'
            items={[
                renderStat('Waiting on Feature Request', 4238),
                renderStat('Awaiting Customer Response', 1005),
                renderStat('Awaiting Developer Fix', 914),
                renderStat('Pending', 281)
            ]}
        />
    );
}

export default UnresolvedTicketsComponent;
