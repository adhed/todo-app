import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {Toggle} from 'material-ui';
import Contants from '../Common/Constants';
import './FilterSwitcher.css';

class FilterSwitcher extends Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(event, isInputChecked) {
        this.props.onToggleHandler(isInputChecked);
    }

    render() {
        const styles = {
            labelStyles: {
                color: Contants.colors.LIGHT_WHITE
            }
        };
        return(
            <div className="filter-switcher">
                <Toggle
                    label="Show filter"
                    onToggle={this.onToggle}
                    labelStyle={styles.labelStyles}
                />
            </div>
        );
    }
}

export default FilterSwitcher;