import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Experience & Education</h2>
        <VerticalTimeline>

          {/* EXPERIENCE 1 */}
          <VerticalTimelineElement
            date="July 2024 – Jun 2025"
            iconStyle={{ background: '#e63946', color: '#fff' }}
            icon={<FaLaptopCode />}
          >
            <h3 className="font-bold text-lg text-sm text-gray-500 hover:text-red-500">AWS Cloud Engineer</h3>
            <h4 className="text-sm text-gray-500">IRT Technologies PVT. LTD</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2 hover:text-blue-500">
            Deployed and automated AWS infrastructure, improving deployment efficiency by 30% through infrastructure-as-code and resource right-sizing.
            Designed disaster recovery using EBS snapshots & S3 versioning, decreasing recovery time objectives for critical systems.
            Solved and documented VPC/subnet/security group issues, increasing team troubleshooting speed and ensuring high service availability.
            </p>
          </VerticalTimelineElement>

          {/* EDUCATION 1 */}
          <VerticalTimelineElement
            date="2021 – 2024"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="font-bold text-lg text-sm text-gray-500 hover:text-red-500">Bachelor of Engineering – Computer Engineering</h3>
            <h4 className="text-sm text-gray-500">Atma Malik Institute Of Technology And Research, Shahapur</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2"> CGPA: 6.55</p>
          </VerticalTimelineElement>

          {/* EDUCATION 2 */}
          <VerticalTimelineElement
            date="2018 – 2021"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="font-bold text-lg text-sm text-gray-500 hover:text-red-500">Diploma – Computer Technology</h3>
            <h4 className="text-sm text-gray-500">SNJB’s Polytechnic, Chandwad</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2"> Score: 82.51%</p>
          </VerticalTimelineElement>

          {/* EDUCATION 3 */}
          <VerticalTimelineElement
            date="2018"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="font-bold text-lg text-sm text-gray-500 hover:text-red-500">S.S.C. – 10th Board</h3>
            <h4 className="text-sm text-gray-500">Janta Vidyalaya Vithewadi</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2"> Score: 84%</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceEducation;
