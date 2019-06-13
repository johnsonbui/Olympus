import React from 'react';
import NotFoundMsg from './not-found';
import RenderingIssueMsg from './rendering-issue';


function ErrorMsg(props) {
    const errorType = props.errorType;
    if (errorType == "NotFound") {
        return <NotFoundMsg />;
    }
    return <RenderingIssueMsg />;
}

export default ErrorMsg;