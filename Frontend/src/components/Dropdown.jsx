import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css'

const Dropdown = () => {
    const Dropdown = ({ title, items }) => {
        const isOpen = true
    
        return (
          <li className="nav-item z-10">
          <div className="nav-link cursor-pointer" href={`#${title}`}>
            {title} <FontAwesomeIcon icon={faChevronDown} style={{ color: '#000000' }} />
          </div>
          {isOpen && (
            <div className="dropdown-content">
              {items.map((item, index) => (
                <a key={index} href={`/${item.replace(/ /g, '-')}`}>
                  {item}
                </a>
              ))}
            </div>
          )}
        </li>
        );
      };
        return (
            <>
                <Dropdown
                    title="Resume Writing"
                    items={[
                        'Text Resume-Entry Level',
                        'Text Resume-Middle Level',
                        'Text Resume-Senior Level',
                        'Visual Resume-Entry Level',
                        'Visual Resume-Middle Level',
                        'Visual Resume-Senior Level'
                    ]}
                />
                <Dropdown
                    title="International Resume"
                    items={["International Resume-Entry Level",
                        "International Resume-Middle Level",
                        "International Resume-Senior Level",
                        "Visual Resume International-Entry Level",
                        "Visual Resume International-Middle Level",
                        "Visual Resume International-Senior Level",
                        "Zap Your Resume-International"]}
                />
                <Dropdown
                    title="Career Growth"
                    items={["Zap Your Resume",
                        "Highlight Your Resume",
                        "Job Search Assistant-6 Months",
                        "Job Search Assistant-3 Months",
                        "Interview Preparation",
                        "Top Management Profile",
                        "Profile Update",
                        "Personal Portfolio",
                        "Cover Letter"]}
                />
                <Dropdown
                    title="Screening Services"
                    items={["Employee Background Verification",
                        "Profile Check & Investigation",
                        "Document Verification",
                        "Web Screening Services"]}
                />
            </>
        )
    }

    export default Dropdown