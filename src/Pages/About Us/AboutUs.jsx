const AboutUs = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-3 gap-8">
        <div className="border p-4">
          <h1 className="font-semibold text-lg">
            Expertise and Compassion Combined
          </h1>
          <br />
          <p className="text-sm font-normal">
            I can not thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
        </div>
        <div className="border p-4">
          <h1 className="font-semibold text-lg">
            Life-Saving Care, Life-Changing Experience
          </h1>
          <p className="text-sm font-normal">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
        </div>
        <div className="border p-4">
          <h1 className="font-semibold text-lg">
            A Partner in Health and Wellness
          </h1>
          <p className="text-sm font-normal">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they have become my trusted
            partner in health and
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
