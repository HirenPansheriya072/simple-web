import React from 'react';

const Contact = () => {
  return (
    <>
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter Name' required />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' required />
                    </div>

                    <div>
                        <label>Message</label>
                        <input type="text" placeholder='Tell us about your query...' required />
                    </div>

                    <button type='submit'>Send</button>
                </form>
            </main>
        </div>
    </>
  )
}

export default Contact;