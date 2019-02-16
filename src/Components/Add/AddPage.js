import React from 'react';
import uuidv1 from "uuid";
import { connect } from "react-redux";
import { addVideo } from "../../actions/index";
import PropTypes from 'prop-types';

class AddPage extends React.Component {
    constructor() {
        super();

        this.state = {
            link: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { link } = this.state;
        const id = uuidv1();

        this.props.addVideo({ link, id });

        this.setState(Object.assign({}, this.state, { link: "" }));
    }

    render() {
        const { link } = this.state;
        const { badWordMessage } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="link">Video Link</label>
                        <input
                            id="link"
                            type="text"
                            className={"form-control " + (badWordMessage ? "is-invalid" : null)}
                            value={link}
                            onChange={this.handleChange}
                            placeholder="Enter Video Url" />
                        <div className="invalid-feedback">
                            {this.props.badWordMessage}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg">Save</button>
                </form>
            </div >
        );
    }
}

AddPage.propTypes = {
    addVideo: PropTypes.func.isRequired,
    badWordMessage: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        addVideo: video => dispatch(addVideo(video))
    };
}

const mapStateToProps = state => {
    return { badWordMessage: state.videos.badWordMessage };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);