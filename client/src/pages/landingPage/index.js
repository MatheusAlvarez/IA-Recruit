import Header from "../../components/Header";
import Apresentation from "../../components/LandingPage/Apresentation";
import Form from "../../components/LandingPage/Form"
import SectionInfo from "../../components/LandingPage/SectionInfo";
import InfoIA from "../../components/LandingPage/InfoIA";
import FormCP from "../../components/LandingPage/Form";

const landingPage = () =>{
    return(
        <>                 
            <Header/>        
            <Apresentation/>           
            <SectionInfo/>                
            <InfoIA/>
            <SectionInfo/>      
            <FormCP/>        
        </>
    );
}

export default landingPage;