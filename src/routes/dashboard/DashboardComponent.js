import React from 'react';
import Box from '@mui/material/Box';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';

const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

function DashboardComponent() {
    const classes = useStyles();
    return (
        <Box>
            <Box
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <Box
                    sx={{display: 'flex', justifyContent: 'space-around'}}                    
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Unresolved'
                        value='60'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Overdue'
                        value='16'
                    />
                </Box>
                <Box
                    className={classes.cardRow}
                    sx={{display: 'flex', justifyContent: 'space-around'}}                    
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Open'
                        value='43'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='On hold'
                        value='64'
                    />
                </Box>
            </Box>
            <div className={classes.todayTrends}>
                <TodayTrendsComponent />
            </div>
            <Box
                sx={{display: 'flex', justifyContent: 'space-between'}}                    
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <UnresolvedTicketsComponent containerStyles={classes.unresolvedTickets} />
                <TasksComponent containerStyles={classes.tasks} />
            </Box>
        </Box>
    );
}

export default DashboardComponent;
