import React from 'react';
import NotFoundMsg from './not-found';
import RenderingIssueMsg from './rendering-issue';


function ErrorMsg(props) {
    const errorType = props.errorType;
    // Condition does not work - props does not have that passed in
    // Forgot how to do that, will correct later
    if (errorType == "NotFound") {
        return <NotFoundMsg />;
    }
    return <RenderingIssueMsg />;
}

export default ErrorMsg;