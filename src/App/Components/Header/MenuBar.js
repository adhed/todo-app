import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterState } from '../../actions/actionCreators';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Badge } from 'material-ui';
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
        const badgeStyles = {
            position: 'absolute',
        };

        let completedTasksBadge = this.props.completedTasks ? <Badge 
                                    style={badgeStyles}
                                    secondary={true} 
                                    badgeContent={this.props.completedTasks} /> : null;
        let activeTasksBadge = this.props.activeTasks ? <Badge 
                                style={badgeStyles} 
                                secondary={true} 
                                badgeContent={this.props.activeTasks} /> : null;

        return(
            <Tabs 
                onChange={this.handleChange}
                className="menu-bar" 
                inkBarStyle={inkBarStyle}
            >
                <Tab 
                    value={Constants.menuTabs.ACTIVE}
                    className="menu-tab"
                    icon={
                        <div>
                            <FontAwesome name="tasks" /> 
                            {activeTasksBadge}
                        </div>
                    }
                    label="Active"
                />
                
                <Tab 
                    value={Constants.menuTabs.COMPLETED}
                    className="menu-tab"
                    icon={
                        <div>
                            <FontAwesome name="check" /> 
                            {completedTasksBadge}
                        </div>
                    }
                    label="Completed"
                />
            </Tabs>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeTasks: state.tasks.activeTasks,
        completedTasks: state.tasks.completedTasks
    };
}

export default connect(mapStateToProps)(MenuBar);