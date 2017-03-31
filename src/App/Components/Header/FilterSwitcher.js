import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFilterTerm } from '../../actions/actionCreators'
import FontAwesome from 'react-fontawesome'
import { Toggle } from 'material-ui'
import Contants from '../../common/constants'
import './FilterSwitcher.css'

class FilterSwitcher extends Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        this.props.dispatch(toggleFilterTerm());
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

export default connect()(FilterSwitcher);