import Image from "next/image"
import Link from "next/link"
import Modal from "@/components/Modal"
import RelatedProjects from "@/components/RelatedProjects"
import { dummyData } from "@/constants"

interface ProjectInterfacee {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string ;
    githubUrl: string ;
    category: string;
    id: string;
}
const Project= async ({ params: { id } }: { params: { id: string } }  ) => {
    // const session = await getCurrentUser()
    // const result = await getProjectDetails(id) as { project?: ProjectInterface}

    // if (!result?.project) return (
    //     <p className="no-result-text">Failed to fetch project info</p>
    // )
    // Function to find a project by id
    const data = dummyData 

const findProjectById = (projectId: string) => {
    return data.projects.find(project => project.id === projectId);
  };
  
  // Example usage:
  const foundProject = findProjectById(id);
  
  if (foundProject) {
    console.log('Found Project:', foundProject);
  } else {
    console.log('Project not found.');
  }

    // const projectDetails = result?.project

    const renderLink = () => `/profile/${foundProject?.id}`

    return (
        <Modal>
            <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
                <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">
                    <Link href='/'>
                        <Image
                            src="/profile01.jpg"
                            width={50}
                            height={50}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                    <div className="flex-1 flexStart flex-col gap-1">
                        <p className="self-start text-lg font-semibold">
                            {foundProject?.title}
                        </p>
                        <div className="user-info">
                            <Link href="/profiles">
                                Foysal Ahammed
                            </Link>
                            <Image src="/dot.svg" width={4} height={4} alt="dot" />
                            <Link href="/" className="text-primary-purple font-semibold"> 
                                {foundProject?.category}
                            </Link>
                        </div>
                    </div>
                </div>

              
            </section>

            <section className="mt-14">
                <Image
                    src={`${foundProject?.image}`}
                    className="object-cover rounded-2xl"
                    width={700}
                    height={680}
                    alt="poster"
                />
            </section>

            <section className="flexCenter flex-col mt-20">
                <p className="max-w-5xl text-xl font-normal">
                    {foundProject?.description}
                </p>

                <div className="flex  flex-wrap mt-5 gap-2 xl:gap-5 md:gap-5 2xl:gap-7 sm:gap-3 ">
                    <Link href={`${foundProject?.githubUrl}`}  target="_blank" rel="noreferrer" className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                         <span className="underline githubbutton"> 🖥 Github</span> 
                    </Link>
                    <Image src="/dot.svg" width={4} height={4} alt="dot" />
                    <Link href={`${foundProject?.liveSiteUrl}`} target="_blank" rel="noreferrer" className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                        <span className="underline liveSiteButton"> 🚀 Live Site</span> 
                    </Link>
                </div>
            </section>
      
            <section className="flexCenter w-full gap-8 mt-28">
                <span className="w-full h-0.5 bg-light-white-200" />
                <Link href="/" className="min-w-[82px] h-[82px]">
                    <Image
                         src="/profile01.jpg"
                        className="rounded-full"
                        width={82}
                        height={82}
                        alt="profile image"
                    />
                </Link>
                <span className="w-full h-0.5 bg-light-white-200" />
            </section>

            <RelatedProjects category={foundProject?.category} />
            
        </Modal>
    )
}

export default Project
