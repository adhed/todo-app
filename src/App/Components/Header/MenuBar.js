import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterState } from '../../actions/actionCreators';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontAwesome from 'react-fontawesome';
import Constants from '../../common/constants';
import './MenuBar.css';

class MenuBar extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.dispatch(setFilterState(value));
    }

    render() {
        const inkBarStyle = {
            background: 'black'
        };
        return(
            <Tabs 
                onChange={this.handleChange}
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

export default connect()(MenuBar);