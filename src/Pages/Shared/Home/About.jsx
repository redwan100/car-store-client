import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
  return (
    <div className="hero min-h-screen bg-gray-100">
      <div className="hero-content gap-10 md:gap-2 grid md:grid-cols-2">
        <div className="relative">
          <img
            src={person}
            alt="person"
            className="max-w-md rounded-lg shadow-2xl h-full"
          />
          <img
            src={parts}
            alt="person"
            className="w-1/3 border-2 border-slate-500 rounded-lg absolute -bottom-5 right-24 md:right-8 border-gradient"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl text-rose-600 font-bold ">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi. Provident cupiditate voluptatem et in.
            Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-error">Go More Info</button>
        </div>
      </div>
    </div>
  );
}

export default About