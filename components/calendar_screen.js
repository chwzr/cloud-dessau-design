import React, {useState} from 'react';
import * as moment from 'moment';

// 

const Calendar = () =>  {

  const [events, setEvents] = useState(false)

  const getEvents = async () => {
    if(events === false) {
      let data = await fetch(`https://www.googleapis.com/calendar/v3/calendars/rvr1vpoap6v75n5l4u8388amoo@group.calendar.google.com/events?key=AIzaSyDz2264TI0D2iFVX1k4pOtUozr2jO8SLtU&maxResults=5&timeMin=${encodeURIComponent(moment().format())}&singleEvents=true&orderBy=startTime&`);
      let json = await data.json();
      setEvents(json.items)
    }

  }

  getEvents()

  return (
    <div className="column is-one-third">
      <div className="box">
        <h2 className="is-size-4">Next Events</h2><br/>
          {events && events.map(event => (
            <article className="message">
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