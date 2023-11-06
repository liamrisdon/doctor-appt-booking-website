
const ContactPage = () => {
    return <>
        <section>
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="heading text-center">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text_para">Would you like to get into contact with us? Submit this form and we will be in touch!</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="form_label">Your Email</label>
                        <input type="email" id="email" placeholder="example@gmail.com" className="form_input mt-1" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="form_label">Subject</label>
                        <input type="text" id="subject" placeholder="What can we help you with?" className="form_input mt-1" />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form_label">Subject</label>
                        <textarea rows="6" type="text" id="message" placeholder="Leave a message" className="form_input mt-1" />
                    </div>
                    <button type="submit" className="btn rounded sm:w-fit">Submit</button>

                </form>

            </div>
        </section>

    </>
}

export default ContactPage;