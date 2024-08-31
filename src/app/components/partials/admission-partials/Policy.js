import { ZoomInComponent } from "../../AnimatedComponents/AnimatedContainer"



const Policy = () => {
    return (
      <section
      id="admissionPolicy"
       className="flex-1 container">
          <ZoomInComponent
          delay={0.25}
          duration={1}
          viewport={{ once: true }}
           className="container">
              <h1 className="h1 flex justify-center 
              gradient-text uppercase">Admission Policy</h1>
              <ol className="container list-outside list-decimal p text-gray-700">
                  <li>It is mandatory that each candidate obtains an admission form at the school.</li>
                  <li>Fill the form accordingly and return.</li>
                  <li>Each applicant shall be tested in an entrance examination.</li>
                  <li>Each candidate shall receive the resent of the examination 
                      but only the candidate that meets the minimum requirement shall be 
                      invited for an oral interview.
                  </li>
              </ol>
          </ZoomInComponent>
      </section>
    )
  }
  
  export default Policy