import React from 'react';
import PropTypes from 'prop-types';

const VideoList = ({ videos }) => {
        return (
            <div>
                {videos.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.link}
                    </li>
                ))}
            </div>
        );
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired
};

export default VideoList;