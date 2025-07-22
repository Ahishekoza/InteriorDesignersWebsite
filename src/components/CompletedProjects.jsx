import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const CompletedProjects = () => {
  const [projectCounts, setProjectCounts] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCounts((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval); // Stop the interval once it reaches the max count
          return prevCount;
        }
      });
    }, 20);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full h-full  my-16">
      <div className="px-4 md:px-6 lg:px-8 py-6 bg-dark-green text-white">
        <div className="flex flex-col md:flex-row w-full md:space-x-5  space-y-3 font-montserrat">
          <div className="w-full md:w-1/2">
            {/* <div className="flex flex-col gap-3 items-start"> */}
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                possimus modi aliquid sint perspiciatis harum quibusdam
                excepturi libero, culpa asperiores omnis autem iure in
                exercitationem architecto laudantium. Tempore, saepe error!
                Suscipit voluptatum tempora vitae facilis laudantium molestiae
              </p>
              {/* <Button className="bg-mango-orange text-white py-2 rounded-lg">
                Request Consulation
              </Button>
            </div> */}
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-10 md:px-6 py-5 items-center">
              <div className="flex flex-col">
                <span className="projectNumbers">{projectCounts}+</span>
                <span className="projectCompletionNotes">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="projectNumbers">{projectCounts}+</span>
                <span className="projectCompletionNotes">Projects done</span>
              </div>
              <div className="flex flex-col">
                <span className="projectNumbers">4.8</span>
                <span className="projectCompletionNotes">out of 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
