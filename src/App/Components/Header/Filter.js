import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterTerm } from '../../actions/actionCreators';
import TextField from 'material-ui/TextField';
import Contants from '../../common/constants';
import FontAwesome from 'react-fontawesome';
const { string, func } = React.PropTypes;
import './Filter.css';

class Filter extends Component {
    PropTypes() {
        filterTerm: string;
        dispatchSetFilterTerm: func;
    }

    handleFilterTermChange(event) {
        this.props.dispatchSetFilterTerm(event.target.value);
    }

    handleRemoveClick() {
        this.props.dispatchSetFilterTerm('');
    }

    render() {
        let tasksWord = this.props.foundedTasks === 1 ? 'task' : 'tasks';

        return (
            <div className="filter form-group">
                <FontAwesome 
                    name="filter" 
                    size="lg"
                    alt="filter"
                    className="filter-icon" />
                <TextField 
                    floatingLabelText="Filter tasks by"
                    floatingLabelStyle={Contants.formStyles.floatingLabelStyle}
                    underlineStyle={Contants.formStyles.underlineStyle}
                    inputStyle={Contants.formStyles.inputStyle}
                    value={this.props.filterTerm.value}
                    id="task-filter"
                    onChange={this.handleFilterTermChange}
                />
                <FontAwesome 
                    name="times"
                    className="filter-remover" 
                    onClick={this.handleRemoveClick}
                    title="Remove filter" />
                <span>{this.props.foundedTasks} {tasksWord} found</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filterTerm : state.filterTerm,
        foundedTasks: state.foundedTasks
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSetFilterTerm(filterTerm) {
            dispatch(setFilterTerm(filterTerm))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
