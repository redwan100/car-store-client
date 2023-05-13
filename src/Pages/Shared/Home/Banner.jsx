import Img1 from '../../../assets/images/banner/1.jpg'
import Img2 from '../../../assets/images/banner/2.jpg'
import Img3 from '../../../assets/images/banner/3.jpg'
import Img4 from '../../../assets/images/banner/4.jpg'
import Img5 from '../../../assets/images/banner/5.jpg'
import Img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Img1} className="w-full object-cover rounded-xl" />
        <div className="w-full h-full absolute gap-4  left-0 bottom-0 rounded-md p-4 flex  items-center bg-gradient-to-r from-[#151515] to-[rgba(2,21,21,0)]">
          <div className="text-white space-y-3 w-2/3 md:w-1/3">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div>
              <button className="btn btn-error sm:mr-3 mb-2">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Img2} className="w-full object-cover" />
        <div className="w-full h-full absolute gap-4  left-0 bottom-0 rounded-md p-4 flex  items-center bg-gradient-to-r from-[#151515] to-[rgba(2,21,21,0)]">
          <div className="text-white space-y-3 w-2/3 md:w-1/3">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div>
              <button className="btn btn-error sm:mr-3 mb-2">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={Img3} className="w-full object-cover" />
        <div className="w-full h-full absolute gap-4  left-0 bottom-0 rounded-md p-4 flex  items-center bg-gradient-to-r from-[#151515] to-[rgba(2,21,21,0)]">
          <div className="text-white space-y-3 w-2/3 md:w-1/3">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div>
              <button className="btn btn-error sm:mr-3 mb-2">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning ">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={Img4} className="w-full object-cover" />

        <div className="w-full h-full absolute gap-4  left-0 bottom-0 rounded-md p-4 flex  items-center bg-gradient-to-r from-[#151515] to-[rgba(2,21,21,0)]">
          <div className="text-white space-y-3 w-2/3 md:w-1/3">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div>
              <button className="btn btn-error sm:mr-3 mb-2">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning ">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img src={Img5} className="w-full object-cover" />
        <div className="w-full h-full absolute gap-4  left-0 bottom-0 rounded-md p-4 flex  items-center bg-gradient-to-r from-[#151515] to-[rgba(2,21,21,0)]">
          <div className="text-white space-y-3 w-2/3 md:w-1/3">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div>
              <button className="btn btn-error sm:mr-3 mb-2">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={Img6} className="w-full object-cover" />

        <div className="w-full h-full absolute gap-4  left-0 bottom-0 rounded-md p-4 flex  items-center bg-gradient-to-r from-[#151515] to-[rgba(2,21,21,0)]">
          <div className="text-white space-y-3 w-2/3 md:w-1/3">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div>
              <button className="btn btn-error sm:mr-3 mb-2">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner