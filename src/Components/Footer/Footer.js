import './Footer.css'


function Footer(){

   
  



    return(
        <div>
             
            <nav class="footer">

            
            

             <a  className="contact-link"  href="mailto:sha4rce@gmail.com ?subject=Message"><img  className="mail-logo" src="/Images/mail.svg" alt="" width="30" height="24"></img> </a>  

             <a  className="whatsapp-link"  href="https://api.whatsapp.com/send?phone=94762110827"> <img  className="mail-logo" src="/Images/whatsapp.svg" alt="" width="30" height="24"></img> </a> 
             
                    <h3 className="footer-head">Tech Hub</h3>
                    <p className="footer-body">Copyright ©️ 2022 - Tech Hub</p>
                    <p className="footer-body">Developed by : Shamras</p>
                    
                
             </nav>

        </div>
    );
}
export default Footer;