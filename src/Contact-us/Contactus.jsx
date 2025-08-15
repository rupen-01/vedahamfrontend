
import axios from "axios";
import ContactSection from "./ContactSection";
import { useState, useRef } from "react"; // ✅ useRef import


// Country-Specific Content Components (same as your original)
const UnitedStatesContent = () => (
  <>
    <h2 className="text-3xl font-extrabold mb-4">Find Your Next Great Hire</h2>
    <ul className="space-y-2 text-sm">
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Connect with Us: Reach Out and Join Our Talent Community!</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>
          Innovative network recruiting model that leverages data and relationships to connect you
          with hard-to-reach candidates.
        </span>
      </li>
    </ul>
  </>
);

const CanadaContent = () => (
  <>
    <h2 className="text-3xl font-extrabold mb-4">Find Your Next Great Hire</h2>
    <ul className="space-y-2 text-sm">
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Connect with Us: Reach Out and Join Our Talent Community!.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Innovative network recruiting model that leverages data and relationships to connect you with hard-to-reach candidates</span>
      </li>
    </ul>
  </>
);

const PhilippinesContent = () => (
  <>
    <h2 className="text-3xl font-extrabold mb-4">Source the Best from the Philippines</h2>
    <ul className="space-y-2 text-sm">
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Experienced professionals across industries.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Affordable talent solutions with strong communication skills.</span>
      </li>
    </ul>
  </>
);

const UAEContent = () => (
  <>
    <h2 className="text-3xl font-extrabold mb-4">Find Top UAE Professionals</h2>
    <ul className="space-y-2 text-sm">
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Hire bilingual, experienced professionals in UAE.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Smart sourcing in a dynamic Middle Eastern market.</span>
      </li>
    </ul>
  </>
);

const IndiaContent = () => (
  <>
    <h2 className="text-3xl font-extrabold mb-4">Connect with India's Brightest Talent</h2>
    <ul className="space-y-2 text-sm">
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Large talent pool across IT, finance, operations and more.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-400 text-lg">✔️</span>
        <span>Flexible and scalable hiring with Hird India experts.</span>
      </li>
    </ul>
  </>
);

// Map of Components
const contentComponents = {
  "United States": <UnitedStatesContent />,
  Canada: <CanadaContent />,
  Philippines: <PhilippinesContent />,
  UAE: <UAEContent />,
  India: <IndiaContent />,
};

// List of countries
const countries = Object.keys(contentComponents);

const TalentForm = () => {
  const [activeCountry, setActiveCountry] = useState("United States");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    company: "",
    reason: "",
  });
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // ✅ File input ka ref

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    for (let key in formData) {
      submitData.append(key, formData[key]);
    }
    if (file) {
      submitData.append("cv", file);
    }

    try {
      const res = await axios.post("http://localhost:5000/submit-form", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Form submitted successfully!");
      console.log(res.data);
        setFormData({
       firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    company: "",
    reason: "",
    cvFilePath:"",
      });
       setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear file input
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit form");
    }
  };

  return (
    <>
      <div className="bg-[#0B469B] mt-15 text-white py-12 px-4 lg:px-20">
        {/* Country Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 py-2 border rounded font-medium ${
                activeCountry === country
                  ? "bg-orange-500 text-white"
                  : "bg-orange-300 text-blue-900"
              } hover:bg-orange-400 transition`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Content + Form */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Country Info */}
          <div className="flex-1">{contentComponents[activeCountry]}</div>

          {/* Right: Form */}
          <form
            className="bg-white text-black rounded-md p-6 flex-1 space-y-4 w-full"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border-b focus:outline-none"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border-b focus:outline-none"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-b focus:outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Your Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full border-b focus:outline-none"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Your Company *</label>
                <input
                  type="text"
                  name="company"
                  className="w-full border-b focus:outline-none"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Comment *</label>
              <textarea
                name="reason"
                className="w-full border-b focus:outline-none"
                rows={2}
                placeholder="Please let us know how we can help you?"
                value={formData.reason}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Upload Document/CV</label>
              <input
                type="file"
                onChange={handleFileChange}
                          ref={fileInputRef} // ✅ ref assign

                className="w-full text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                In case you have anything to show us
              </p>
            </div>

            <p className="text-xs text-gray-500">
              By providing your phone number, you agree to receive SMS messages...
            </p>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default TalentForm;
