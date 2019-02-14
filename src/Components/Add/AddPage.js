import React from 'react';

class AddPage extends React.Component {
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Video Link" aria-label="Video Link" aria-describedby="basic-addon2" />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit"></input>
            </div>
        );
    }
}

export default AddPage;