import React from 'react';
import { any, arrayOf, func, string } from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { createUseStyles, useTheme } from 'react-jss';
import { useSidebar } from 'hooks/useSidebar';

const useStyles = createUseStyles({
    activeContainer: {
        backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
    },
    container: {
        display: 'flex',
        height: 56,
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
        },
        paddingLeft: ({ level }) => 32 * level,
        transition: 'all 0.2s ease-in-out'
    },
    leftBar: {
        borderLeft: ({ theme, level }) =>
            level > 1 ? 'none' : `3px solid ${theme.color.darkGrayishBlue}`
    },
    title: {
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: ({ theme, isActive }) => (isActive ? theme.color.paleBlue : theme.color.grayishBlue),
        marginLeft: 24
    }
});

function MenuItemComponent({ children, icon: Icon, id, items = [], level = 1, onClick, title }) {
    const theme = useTheme();
    const isCollapsible = children && children.length > 0;
    const { isExpanded, isActive, onItemClick } = useSidebar({
        isCollapsible,
        item: id,
        items
    });
    const classes = useStyles({ theme, level, isActive });
    const classNameColumn = isActive ? classes.leftBar : '';
    const classNameContainer = [classes.container, isActive && classes.activeContainer].join(' ');
    const iconColor = isActive ? theme.color.paleBlue : theme.color.grayishBlue2;

    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        onItemClick();
    }

    return (
        <Box key={id} className={classNameColumn}>
            <Box vertical='center' onClick={onItemClicked} className={classNameContainer}>
                <Icon fill={iconColor} opacity={!isActive && '0.4'} />
                <span className={classes.title}>{title}</span>
            </Box>
            {isCollapsible && (
                <Collapse in={isExpanded}>
                    {children.map((child) => (
                        <child.type key={child.props.id} {...child.props} />
                    ))}
                </Collapse>
            )}
        </Box>
    );
}

MenuItemComponent.propTypes = {
    children: any,
    icon: func.isRequired,
    id: string.isRequired,
    onClick: func,
    items: arrayOf(string),
    title: string.isRequired
};

export default MenuItemComponent;
