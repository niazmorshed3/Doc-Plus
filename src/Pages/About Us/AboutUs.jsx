import pp from "../../../public/profile.png"
import star from "../../../public/star.png"
const AboutUs = () => {
  return (
    <div className="my-12">
      <div className="pb-2 ">
        <button className="btn btn-outline rounded-full">Testimonial</button>
      </div>
      <div className="grid grid-cols-3 gap-16">
        <div className=" p-4">
          <h1 className="font-semibold text-lg">
            Expertise and Compassion Combined
          </h1>
          <br />
          <p className="text-sm font-normal">
            I can not thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex my-6 gap-4">
            <div>
              <img className="max-w-16" src={pp} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Thomas Shelby</h1>
              <div className="flex gap-2"> 
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1 className="font-semibold text-lg">
            Life-Saving Care, Life-Changing Experience
          </h1>
          <p className="text-sm font-normal">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex my-6 gap-4">
            <div>
              <img className="max-w-16" src={pp} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Bruce Wayne</h1>
              <div className="flex gap-2"> 
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <h1 className="font-semibold text-lg">
            A Partner in Health and Wellness
          </h1>
          <p className="text-sm font-normal">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they have become my trusted
            partner in health and
          </p>
          <div className="flex my-6 gap-4">
            <div>
              <img className="max-w-16" src={pp} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">King Ragner</h1>
              <div className="flex gap-2"> 
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              <img className="max-w-6" src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
