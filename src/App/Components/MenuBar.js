import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontAwesome from 'react-fontawesome';
import Constants from '../Common/Constants';
import './MenuBar.css';

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: Constants.menuTabs.ACTIVE
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            activeTab: value
        });
        this.props.changeHandler(value);
    }

    render() {
        const inkBarStyle = {
            background: Constants.colors.LIGHT_WHITE
        }
        return(
            <Tabs 
                className="menu-bar" 
                onChange={this.handleChange}
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