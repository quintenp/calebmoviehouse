import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import PropTypes from 'prop-types';

export class Popular extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.videos.map(el => (
                    <li className="list-group-item" key={el.id}>
                        <a href={el.url}><img src={el.thumbnail} />{el.title}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { videos: state.videos.remoteVideos.slice(0, 5) };
}

Popular.propTypes = {
    getData: PropTypes.func.isRequired,
    videos: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { getData })(Popular);