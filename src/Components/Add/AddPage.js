import React from 'react';
import { connect } from "react-redux";
import { addVideo } from "../../actions/index";

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

        this.props.addVideo({ link });
        this.setState({ link: "" });
    }

    render() {
        const { link } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="link">Video Link</label>
                        <input type="text" className="form-control" id="link" value={link} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-success btn-lg">SAVE</button>
                </form>
            </div >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addVideo: video => dispatch(addVideo(video))
    };
}

export default connect(null, mapDispatchToProps)(AddPage);