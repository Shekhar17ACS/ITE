// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// const NewsletterAndMap = () => {
//   const [email, setEmail] = useState('');
//   const [newsletter, setNewsletter] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       toast.success('Thank you for subscribing to our newsletter!');
//       setNewsletter(true);
//     } else {
//       toast.error('Please enter a valid email address.');
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center h-screen">
//       <div className="w-full md:w-1/2 p-4">
//         <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email address"
//             className="w-full p-2 mb-4 border border-gray-300 rounded-md"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
//           >
//             Subscribe
//           </button>
//         </form>
//         {newsletter && (
//           <p className="text-green-500 mt-4">Thank you for subscribing to our newsletter!</p>
//         )}
//       </div>
//       <div className="w-full md:w-1/2 p-4">
//         <h2 className="text-2xl font-bold mb-4">Map Location</h2>
//         <MapContainer
//           center={[37.7749, -122.4194]}
//           zoom={13}
//           style={{ height: '400px', width: '100%' }}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={[37.7749, -122.4194]}>
//             <Popup>
//               <span>
//                 This is the location of our office. You can find us here.
//               </span>
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// export default NewsletterAndMap;


import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setNewsletter(true);
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-md h-96">
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-blue-500 text-3xl mr-2" />
        <h2 className="text-2xl font-bold">Stay Updated!</h2>
      </div>
      <p className="text-lg text-gray-500 mb-4">
        Get the latest news and updates from us!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Subscribe
        </button>
      </form>
      {newsletter && (
        <p className="text-green-500 mt-4">Thank you for subscribing to our newsletter!</p>
      )}
      {/* <div className="flex-1"></div> */}
    </div>
  );
};

export default Newsletter;