import DirectorSection from "./ExecDirSection"
import ManagementSection from "./ManagementStaffSection"


function LeadersSection() {
  return (
    <section className="relative grid gap-4 bg-white py-[4rem]" id="leaders">
        <DirectorSection />
        <ManagementSection />
    </section>
  )
}

export default LeadersSection