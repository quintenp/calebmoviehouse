import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import PropTypes from 'prop-types';

export class Post extends Component {
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
                    <li className="list-group-item" key={el.id.videoId}>
                        <img src={el.snippet.thumbnails.default.url} /><a href={"https://www.youtube.com/watch?v=" + el.id.videoId}>{el.snippet.title}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { videos: state.videos.remoteVideos.slice(0, 5) };
}

Post.propTypes = {
    getData: PropTypes.func.isRequired,
    videos: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { getData })(Post);