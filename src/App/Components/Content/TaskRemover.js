import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RaisedButton, Dialog, FlatButton } from 'material-ui'
import FontAwesome from 'react-fontawesome'
import Constants from '../../common/constants'
import { removeAllTasks } from '../../actions/actionCreators'
import './TaskRemover.css'

class TaskRemover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleDialogConfirm = this.handleDialogConfirm.bind(this);
    }

    handleClick() {
        this.setState({ dialogOpen: true });
    }

    handleDialogConfirm() {
        this.props.dispatch(removeAllTasks(this.props.filterState));
        this.setState({ dialogOpen: false });
    }

    handleDialogClose() {
        this.setState({ dialogOpen: false });
    }

    render() {
        let tasksStateText = this.props.filterState === Constants.menuTabs.ACTIVE ? 'active' : 'completed';
        let removeLabel = `Remove all ${tasksStateText} tasks`;
        const fontTrashStyles = {
            color: 'white'
        };
        const dialogActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleDialogClose}
            />,
            <FlatButton
                label="Remove"
                primary={true}
                keyboardFocused={false}
                onTouchTap={this.handleDialogConfirm}
            />,
        ]

        return (
                <div className="remover">
                    { this.props.tasksAmount ? 
                        <RaisedButton
                            label={removeLabel}
                            onClick={this.handleClick}
                            primary={true}
                            icon={
                                <FontAwesome
                                    size="lg" 
                                    style={fontTrashStyles} 
                                    name="trash-o" 
                                    />
                            }
                            /> : null 
                    }
                    <Dialog
                        title={removeLabel}
                        actions={dialogActions}
                        modal={false}
                        open={this.state.dialogOpen}
                        onRequestClose={this.handleDialogClose}
                        >
                        {`Do you really want to remove all ${tasksStateText} tasks? This action is irreversible.`}
                    </Dialog>
                </div>
            );
    }
}

const mapDispatchToProps = (dispach) => {
    return {
        
    };
}

const mapStateToProps = (state) => {
    return {
        filterState: state.filterState.value
    };
}

export default connect(mapStateToProps)(TaskRemover)
