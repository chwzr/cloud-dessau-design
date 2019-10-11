import React, {useState} from 'react'



const Push = () => {
  var p = true;
  var ns = false

  if(process.browser){
    if(("Notification" in window)){
      p =  process.browser && Notification.permission === "granted"
    }
    ns = !("Notification" in window)
  }

  const [permission, setPermission]  = useState(p)
  const getToken = () => {
    if(("Notification" in window)){
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
            setPermission(true)
          } else {
            console.log('Unable to get permission to notify.');
            setPermission(false)
          }
        });    
    }
  }

  return (
          <>
        {!permission && <div>
            <div className="box">
                <h3 className="is-size-4">Notifications</h3><br/>
                <p>
                  Do you want to get informed whats happening @ <strong>[cloud]</strong> ? 
                </p><br/>
                <button className="button is-primary" onClick={getToken}>
                  Yes I do!
                </button>
            </div>
          </div>
        }

        {ns && <div className="box">
          <p>
            Sorry Apple is not supporting a open Web.
            We are working on Push Notifications on iOS.
          </p>
        </div>}
        
        
        </>
        )
}

export default Push