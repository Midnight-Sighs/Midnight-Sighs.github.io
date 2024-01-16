export const scrollTo =(selectedSection, location)=>{
    const scrollSection = document.getElementById(`${selectedSection}`);
    scrollSection?.scrollIntoView({behavior: "smooth", block: 'start'});
    location.hash = selectedSection;
    let split = window.location.href.split("#")
    if(split?.length < 3){
        window.location.href += `${selectedSection}`
    }else if(split?.length === 3 && selectedSection){
        window.location.href = `${split[0]}#${split[1]}${selectedSection}`
    }
}