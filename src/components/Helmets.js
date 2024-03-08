import { Helmet } from "react-helmet-async"

export const Helmets = ({text}) => {
    return(
        <div>
            <Helmet>
                <title>{text}</title>
            </Helmet>
        </div>
    ) 

}