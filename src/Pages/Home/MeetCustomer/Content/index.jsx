import Tim from "./Tim";
import Logo from "./Logo";

const Content = ()=>{
    return(
        <>
            <div>
                <p style={{width: "90%"}}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
                    risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                    in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
                    molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
                    tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
                    potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
                    odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
                    ac sit amet magna.</p>
                <Tim/>
                <Logo/>
            </div>
        </>
    )

}

export default Content;