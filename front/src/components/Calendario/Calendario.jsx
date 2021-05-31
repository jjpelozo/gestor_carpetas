import React from 'react'
import "./Calendario.css"

function Calendario() {
    return (
        <div>
           <iframe title="Calendario"  src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FArgentina%2FCordoba&amp;src=aWJhcnJheWFzb2NpYWRvczIwMThAZ21haWwuY29t&amp;src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%230B8043" 
           className="calendario"></iframe>

           <button>

           <a href="https://calendar.google.com/calendar/ical/jesusjpelozo%40gmail.com/public/basic.ics">{}</a>

           </button>
        </div>
    )
}

export default Calendario
