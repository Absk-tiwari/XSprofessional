import { placeholder } from "data/data.header"

export const Whatsapp = () => {
    const openChat = () => {
        let link = document.createElement('a')
        link.target="_blank";
        link.href = "https://wa.me/+91" + process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        link.click();
    }
    return (
        <div className="img-thumbnail"
            style={{
                position:'fixed',
                bottom:25,
                zIndex:1000,
                height:80,
                width:80,
                borderRadius:'50%',
                right:25,
                cursor:'pointer'

            }}
            onClick={openChat}
        >
            <img src={process.env.NEXT_PUBLIC_BASE_PATH+placeholder.whatsapp}/>
        </div>
    )
}
