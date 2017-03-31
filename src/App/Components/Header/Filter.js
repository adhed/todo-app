import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterTerm } from '../../actions/actionCreators';
import TextField from 'material-ui/TextField';
import Contants from '../../common/constants';
import FontAwesome from 'react-fontawesome';
const { string, func, object } = React.PropTypes;
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { filterTerm: '' };
        this.handleFilterTermChange = this.handleFilterTermChange.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }
    
    PropTypes() {
        filter: string;
        dispatchSetFilterTerm: func;
    }

    handleFilterTermChange(event) {
        this.setState({ filterTerm: event.target.value });
        this.props.dispatchSetFilterTerm(event.target.value);
    }

    handleRemoveClick() {
        this.setState({ filterTerm: '' });
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
                    value={this.state.filterTerm}
                    id="task-filter"
                    onChange={this.handleFilterTermChange}
                />
                <FontAwesome 
                    name="times"
                    className="filter-remover" 
                    onClick={this.handleRemoveClick}
                    title="Remove filter" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        foundedTasks: state.filterTerm.foundedTasks
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
