const Resume = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Resume;
