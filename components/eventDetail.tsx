import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetail = () => {
  const param = useParams();
  return (
    <React.Fragment>
      <div>
        <Link to=".." relative="path">
          events
        </Link>
        <a href="#">{param.eventId}</a>
      </div>
      <h1>this is event detail page for {param.eventId}</h1>
    </React.Fragment>
  );
};

export default EventDetail;
