const Certifications = () => {
  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/H0ZG85YO6H9D",
    },
    {
      name: "Forward Program",
      issuer: "McKinsey & Company",
      url: "https://www.credly.com/badges/1b6f435d-6548-4e53-9f2d-d25457759285/public_url",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Certifications
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500 hover:bg-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600">{cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
