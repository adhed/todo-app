import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontAwesome from 'react-fontawesome';
import Constants from '../../common/constants';
import './MenuBar.css';

class MenuBar extends Component {
    render() {
        const inkBarStyle = {
            background: Constants.colors.LIGHT_WHITE
        }
        return(
            <Tabs 
                className="menu-bar" 
                inkBarStyle={inkBarStyle}
            >
                <Tab 
                    value={Constants.menuTabs.ACTIVE}
                    className="menu-tab"
                    icon={<FontAwesome name="tasks" />}
                    label="Active"
                />
                <Tab 
                    value={Constants.menuTabs.COMPLETED}
                    className="menu-tab"
                    icon={<FontAwesome name="check" />}
                    label="Completed"
                />
            </Tabs>
        );
    }
}

export default MenuBar;