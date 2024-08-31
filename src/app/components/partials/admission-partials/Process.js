import { ZoomOutComponent } from "../../AnimatedComponents/AnimatedContainer"



const Process = () => {
  return (
    <section
    id="admissionProcess"
     className="flex-1 container py-5">
        <ZoomOutComponent
        delay={0.25}
        duration={1}
        viewport={{ once: true }}
         className="container">
            <h1 className="h1 flex justify-center 
            gradient-text uppercase">Admission Process</h1>
            <ol className="px-5 container list-outside list-decimal p text-gray-700">
                <li>It is mandatory that each candidate obtains an admission form at the school.</li>
                <li>Fill the form accordingly and return.</li>
                <li>Each applicant shall be tested in an entrance examination.</li>
                <li>Each candidate shall receive the resent of the examination 
                    but only the candidate that meets the minimum requirement shall be 
                    invited for an oral interview.
                </li>

            </ol>
        </ZoomOutComponent>
    </section>
  )
}

export default Process