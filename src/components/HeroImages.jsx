import { FiPhoneCall } from 'react-icons/fi';
import { motion } from 'framer-motion';

const HeroImages = ({
  mainImage = '/Hero/1_2.png',
  groupImage = '/Hero/Group.png',
  whiteImage = '/Hero/whiteImg (2).png',
  maskImage = '/Hero/Mask Group.png',
}) => {
  return (
    <div className="w-full px-4 md:px-10 pt-10 pb-32 flex flex-col items-center">
   
      <div className="w-full max-w-5xl flex justify-center items-center">
        <div className="relative flex justify-center items-center w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[560px] xl:h-[600px] -mt-24">
          {/* Background Images  */}
          <img
            src={groupImage}
            alt="Group Effect"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 w-60 sm:w-44 md:w-60 lg:w-64 xl:w-90 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          />
          <img
            src={whiteImage}
            alt="White Overlay"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 10, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute top-1/2 left-1/2 w-50 sm:w-36 md:w-48 lg:w-56 xl:w-90 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          />
          <img
            src={maskImage}
            alt="Mask"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 10, y: 0 }}
            transition={{ duration: 1.4 }}
            className="absolute top-1/2 left-2/3 w-60 sm:w-40 md:w-52 lg:w-60 xl:w-90 -translate-x-1/2 -translate-y-2/3 z-0 pointer-events-none"
          />

          {/* Main Hero Image  */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: 'spring' }}
            className="relative z-10 md:bottom-0 bottom-5 w-[80%] md:w-[60%] max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[550px]"
          >
            <img
              src={mainImage}
              alt="Main Hero"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-1/2 md:top-[90%] -bottom-[40%] transform -translate-x-1/2 z-20 w-[90%] md:w-[70%] max-w-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0px 10px 30px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 flex flex-col relative transition-all duration-1"
            >
              <a href="tel:+9212345678" className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 transition duration-300">
                <FiPhoneCall className="text-2xl" />
              </a>
              <h4 className="text-sm text-black font-semibold mb-1">
                For Further Inquiries Call:
              </h4>
              <p className="text-lg font-bold text-black mb-2">+92-12345678</p>
              <p className="text-sm text-gray-600">
                Ready to elevate your business? Contact us to explore tailored software solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
