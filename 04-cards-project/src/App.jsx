import Card from './components/Card'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://img.logo.dev/google.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Google",
      datePosted: "2 days ago",
      postName: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://img.logo.dev/microsoft.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Microsoft",
      datePosted: "1 day ago",
      postName: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://img.logo.dev/amozone.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Amazon",
      datePosted: "5 days ago",
      postName: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://img.logo.dev/meta.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Meta",
      datePosted: "3 days ago",
      postName: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://img.logo.dev/apple.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Apple",
      datePosted: "1 week ago",
      postName: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://img.logo.dev/netflix.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Netflix",
      datePosted: "4 days ago",
      postName: "Frontend Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Remote, India"
    },
    {
      brandLogo: "https://img.logo.dev/nvidia.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      postName: "React UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://img.logo.dev/adobe.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Adobe",
      datePosted: "2 days ago",
      postName: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://img.logo.dev/uber.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Uber",
      datePosted: "3 days ago",
      postName: "Web Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Gurugram, India"
    },
    {
      brandLogo: "https://img.logo.dev/airbnb.com?token=pk_YhgEMS7ZRAquRZI3SDLd9w",
      companyName: "Airbnb",
      datePosted: "1 day ago",
      postName: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Remote, India"
    }
  ];

  return (
    <div>
      <div className="parent">
        {jobOpenings.map((item,id) => {
          return <div key={id}>
            <Card
              brandLogo={item.brandLogo}
              companyName={item.companyName}
              datePosted={item.datePosted}
              postName={item.postName}
              tag1={item.tag1}
              tag2={item.tag2}
              pay={item.pay}
              location={item.location}
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default App