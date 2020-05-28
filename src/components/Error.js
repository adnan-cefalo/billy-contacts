import React from "react";

function Error(props) {
    const {message} = props;

    return (
        <p className="text-center">
            Something went wrong. <br/>
            <strong>Message:</strong> {message}
        </p>
    );
}

export default Error;