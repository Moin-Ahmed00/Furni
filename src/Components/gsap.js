import gsap from "gsap";

export const headingEffecct=()=>{
    const N1 = gsap.timeline();
    N1.fromTo(
        '.NavBar',
        {
            y: "-100%",
        },{
            y: "0%",
            duration: 1,
            ease: "bounce"
        }
        
    )
    .fromTo(
        '.furni',{
            opacity: 0,
            scale: 0
        },{
            opacity: 1,
            scale: 1
        }
    )

    .fromTo(
        '.menu',{
            x: '100vw',
        },
        {
            x: '0%',
            duration: 2,
            ease: 'back.in'
        }
    )
}