import Link from 'next/link'
import Image from 'next/image'
import { dummyData } from '@/constants'

type Props = {
    category: any
}

const RelatedProjects = async ({ category}: Props) => {
  
    const filteredProjects = dummyData.projects.filter(project => project.category === category);
    

    return (
        <section className="flex flex-col mt-32 w-full">
            <div className="flexBetween">
                <p className="text-base font-bold">
                    More by Foysal Ahammed
                </p>
                <Link
                    href="/profiles"
                    className="text-primary-purple text-base"
                >
                    View All
                </Link>
            </div>

            <div className="related_projects-grid">
                {filteredProjects?.map((datas ) => (
                    <div className="flexCenter related_project-card drop-shadow-card">
                    <Link href={`/project/${datas?.id}`} className="flexCenter group relative w-full h-full">
                        <Image src={datas?.image} width={414} height={314} className="w-full h-full object-cover rounded-2xl" alt="project image" />
        
                        <div className="hidden group-hover:flex related_project-card_title">
                            <p className="w-full">{datas?.title}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RelatedProjects