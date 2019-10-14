import React, {useState} from 'react';
import * as moment from 'moment';

// 

const Calendar = (props) =>  {


  return (
    <div className="column is-one-third">
      <div className="box">
        <h2 className="is-size-4">Next Events</h2><br/>
          {props.events && props.events.map((event, i) => (
            <article key={i} className="message">
              <div className="message-body">
                <h3 className="is-size-5">{event.summary}</h3>
                <p>
                  {moment(event.start.dateTime ? event.start.dateTime : event.start.date).format('dddd - DD.MM. - hh:mm')}
                </p>
              </div>
            </article>
          ))}
      </div>
    </div>
  )
}

export default Calendar