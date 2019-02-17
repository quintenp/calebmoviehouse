import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import VideoList from './VideoLinkList';
import PostApi from '../Post';

class LibraryPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        const { videos } = this.props.videos;
        return (
            <div>
                <h3>Video Links</h3>
                <VideoList videos={videos} />

                <h3>External List</h3>
                <PostApi />
            </div>
        );
    }
}

LibraryPage.propTypes = {
    videos: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return { videos: state.videos };
};

export default connect(mapStateToProps)(LibraryPage);