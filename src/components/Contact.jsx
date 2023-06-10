import React from 'react'

export default function Contact() {
  return (
    <section id='contact'>
        <div className="container">
            <h6>Hire Me</h6>
            <form action="/" method='POST'>
                <div>
                    <input type="text" name="name" placeholder='Example: Jan Doe'/>
                </div>
                <div>
                    <input type="email" name="email" placeholder='Example: jan@doe.com'/>
                </div>
                <div>
                    <textarea name="info" placeholder='Example: Hello, I am interested in hiring you for a small React project. Do you have availability?'></textarea>
                </div>
                <div>
                    <button type="submit">contact</button>
                </div>
            </form>
        </div>
    </section>
  )
}
