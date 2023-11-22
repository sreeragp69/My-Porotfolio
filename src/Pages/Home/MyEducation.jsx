import data from "../../data/index.json";


export default function MyEducation(){
    return (
        <section className="skills--section" id="mySkills">
            
            <div className="portfolio--container">
                {/* <p className="section-title">My Education</p> */}
                <h2 className="skills--section--heading">My Education</h2>
            </div>

            <div className="skills--section--container">
                {data?.education?.map((item, index) =>(

                    <div key={index} className="skills--section--card">
                        <div className="skills--section-img">
                            <img className="images" src={item.src} alt="product chain" />
                        </div>

                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}