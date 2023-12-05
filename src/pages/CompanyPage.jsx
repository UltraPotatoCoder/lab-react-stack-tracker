/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CompanyPage({ companies }) {
  // Accessing the companySlug from the URL parameters:
  const { companySlug } = useParams();

  //Finding the company object with the matching slug from the array:
  useEffect(() => {
    const company = companies.find(c => c.slug === companySlug);
    if (!company) {
      // Handling the case where the company is not found:
      console.error(`Company not found for slug: ${companySlug}`);
    }
  }, [companies, companySlug]);

  const company = companies && companies.find(c => c.slug === companySlug);

  return (
    <div>
      {company ? (
        <>
          <h1>Company Profile</h1>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
        </>
      ) : (
        <div>Company not found</div>
      )}
    </div>
  );
}
export default CompanyPage;
