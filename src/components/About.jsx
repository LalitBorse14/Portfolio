import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white" data-aos="fade-right">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">About Me</h2>
         <p className="text-lg text-gray-300 leading-relaxed">
          I’m <span className="text-red-400 font-semibold">Lalit Borse</span>, a Cloud Engineer based in Pune, passionate about building scalable,
          secure, and automated infrastructure using <span className="text-blue-300">AWS and DevOps best practices.</span>  With a strong foundation in <span className="text-blue-300">Linux system administration, infrastructure as code, and CI/CD pipelines</span>, 
          I specialize in deploying cloud-native solutions that solve real-world problems.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          I've worked on impactful projects—from automating EC2 provisioning with Python and boto3, to deploying a <span className="italic">serverless React-based language translator app</span>
          using AWS Lambda, API Gateway, and Amplify. My experience spans across services like EC2, S3, IAM, VPC, CloudFormation, and Terraform, with a focus on performance, cost-efficiency, and reliability.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          I’m excited to contribute to open-source, explore AI/ML integrations, and build solutions that make a meaningful impact in domains like healthcare, productivity, and security.
          Let’s connect and create something powerful together
        </p>

      </div>
    </section>

  );
};

export default About;
