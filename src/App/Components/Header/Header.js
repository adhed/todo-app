import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import Title from './Title';
import FilterSwitcher from './FilterSwitcher';
import MenuBar from './MenuBar';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div>
                <Row className="top-bar">
                    <Col xs={8}>
                        <Title />
                    </Col>
                    <Col xs={4}>
                        <FilterSwitcher />
                    </Col>
                </Row>
                {this.props.isFilterVisible ? <Filter /> : null}
                <MenuBar />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFilterVisible: state.filterTerm.visible
    }
}

export default connect(mapStateToProps)(Header);