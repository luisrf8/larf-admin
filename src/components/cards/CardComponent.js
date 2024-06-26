import React from 'react';
import Box from '@mui/material/Box';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        padding: '24px 32px 0px 32px',
        height: '100%'
    },
    containerMobile: {
        padding: '12px 16px 6px 16px !important'
    },
    itemContainer: {
        marginLeft: -32,
        marginRight: -32,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 18,
        paddingTop: 18,
        borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
        '&:last-child': {
            borderBottom: 'none'
        }
    },
    itemContainerMobile: {
        marginLeft: -16,
        marginRight: -16,
        paddingLeft: 16,
        paddingRight: 16
    },
    link: {
        ...theme.typography.link
    },
    subtitle: {
        ...theme.typography.smallSubtitle,
        color: theme.color.grayishBlue2
    },
    subtitle2: {
        color: theme.color.veryDarkGrayishBlue,
        marginLeft: 2
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue
    }
}));

function CardComponent(props) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { title, link, subtitle, subtitleTwo, items, containerStyles } = props;
    function renderItem(item, index) {
        return (
            <Box
                className={classes.itemContainer}
                key={`item-${index}`}
                breakpoints={{ 426: classes.itemContainerMobile }}
            >
                {item}
            </Box>
        );
    }

    return (
        <Box
            flexGrow={1}
            className={[classes.container, containerStyles].join(' ')}
            breakpoints={{ 426: classes.containerMobile }}
        >
            <Box horizontal='space-between'>
                <Box>
                    <span className={classes.title}>{title}</span>
                    <Box style={{ marginTop: 8, marginBottom: 16 }}>
                        <span className={classes.subtitle}>{subtitle}</span>
                        {subtitleTwo && (
                            <span className={[classes.subtitle, classes.subtitle2].join(' ')}>
                                {subtitleTwo}
                            </span>
                        )}
                    </Box>
                </Box>
                <span className={classes.link}>{link}</span>
            </Box>
            {items.map(renderItem)}
        </Box>
    );
}

export default CardComponent;
