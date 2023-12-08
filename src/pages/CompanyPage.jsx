/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CompanyPage({ companies }) {
  // Accessing the companySlug from the URL parameters:
  const { companySlug } = useParams();

  const [company, setCompany] = useState([]);

  //Finding the company object with the matching slug from the array:
  useEffect(() => {
    const foundCompany = companies.find(c => c.slug === companySlug);

    if (foundCompany) {
      setCompany(foundCompany);
    } else {
      console.error(`Company not found for slug: ${companySlug}`);
    }
  }, [companies, companySlug]);

  return (
    <div>
      {company ? (
        <>
          <h1>Company Profile</h1>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
          <img
            src={company.logo}
            alt={`${company.name} Logo`}
            onError={() =>
              console.error(
                `Error loading logo for ${company.name} (${company.slug})`
              )
            }
          />
        </>
      ) : (
        <div>Company not found</div>
      )}
    </div>
  );
}
export default CompanyPage;
