import '../css/Contact.css'



function Contact(){

    return(
        <section id='contact'>
        <div className='contact__content'>
            <div className='contact__title'><h1>~ Contact Me ❁❁</h1></div>
            <div className='contact__methods'>
                <div className='method__email'><a href="mailto:oklotasydney@gmail.com">Email</a></div>
                <div className='method__phone'><a href="https://github.com/soklota" target="github">GitHub</a></div>
                <div className='method__linkedin'><a href="https://www.linkedin.com/in/sydney-oklota" target="linkedin">LinkedIn</a></div>
            </div>
        </div>
        </section>
    )
}

export default Contact;