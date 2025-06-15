// SectionWrapper.jsx
const SectionWrapper = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-purple-600 via-purple-800 to-blue-900">
      {children}
    </div>
  );
};

export default SectionWrapper;