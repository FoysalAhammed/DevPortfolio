import { faqs } from "@/constant";
import FaqCard from './FaqCard'
const FaqList = () => {
  return(
    <div className='mt-[38px]'>
    {
        faqs.map((item) => (
            <FaqCard  item={item}  />
        ))
    }
    
</div>
  )
}

export default FaqList;