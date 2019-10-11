import React, {useState} from 'react'



const Push = () => {
  console.log("v 1")
  let p = false;
  if(("Notification" in window)){
    p =  process.browser && Notification.permission === "granted"
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

  // if(process.browser){
  //   let p = Notification.permission === "granted"
  //   setPermission( p );
  // }

  return (

      <div>

        {!permission && <div>
            <p>
              Do you want to get informed whats happening @ <strong>[cloud]</strong> ? 
            </p><br/>
            <button className="button is-primary is-medium" onClick={getToken}>
              Yes I do!
            </button>
          </div>
        }

        {/* {permission && <div> You will get Notifications </div>} */}

      </div>
  )
}

export default Push