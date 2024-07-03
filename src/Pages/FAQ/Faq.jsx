const Faq = () => {
  return (
    <div>
      <div className="pb-2 ">
        <button className="btn btn-outline rounded-full">Faq</button>
      </div>
      <div>
        <h1 className="text-4xl font-semibold">Frequntly Asked Question</h1>
        <br />
        <div className="p-6">
          <h2 className="text-2xl font-medium"> What are your office hours?</h2>
          <hr className="border-dotted" />
          <br />
          <p>
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How can I schedule an appointment?
        </div>

        <div className="collapse-content">
          <p>Through our Email</p>
        </div>
      </div>
      <br />
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you accept insurance?
        </div>
        <div className="collapse-content">
          <p>Yes we do</p>
        </div>
      </div>
      <br />
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What should I bring to my appointment?
        </div>
        <div className="collapse-content">
          <p>Yes you should</p>
        </div>
      </div>
      <br />
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you offer telemedicine appointments?
        </div>
        <div className="collapse-content">
          <p>Yes we do</p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Faq;
