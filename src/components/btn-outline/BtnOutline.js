import gitBlack from "../../images/icons/gitHub-black.jpg";

import "./style.css";

const BtnOutline = (props) => {
    return (
        <a href={props.link} className="btn-outline" target='_blank'>
            <img src={gitBlack} alt="" />
            GitHub repo
        </a>
     );
}
 
export default BtnOutline;