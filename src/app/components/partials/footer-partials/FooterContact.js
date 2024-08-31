import { contactDetails } from "../../../../../public/data";

const FooterContact = () => {
  return (
    <div className="flex-1 min-w-fit grid gap-4">
        <h3 className="gradient-text p">Contact DWISS :</h3>
        <ul className="grid gap-4 container">
            {
                contactDetails.map((detail, i)=>(
                    <li key={i}>
                        <div className="flex gap-1">
                            <span>{detail.icon}</span>
                            <span>{detail.name} :</span>
                        </div>
                        <div className="grid gap-1 container">
                            {
                                detail.description?.map((desc, i)=>(
                                    <ul key={i}>
                                        <li className="text-xs container">{desc}</li>
                                    </ul>
                                ))
                            }

                        </div>

                    </li>
                ))
            }
            
        </ul>
    </div>
  )
}

export default FooterContact