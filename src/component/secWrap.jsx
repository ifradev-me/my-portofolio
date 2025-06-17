// SectionWrapper.jsx
const SectionWrapper = ({ children, classList }) => {
  return (
    <div className={classList}>
      {children}
    </div>
  );
};

export default SectionWrapper;