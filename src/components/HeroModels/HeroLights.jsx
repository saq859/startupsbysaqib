import React from 'react'

const HeroLights = () => {
  return (
   <>
        <spotLight
         position={[2,5,6]}
         angle={0.15}
         penumbra={0.2}
         intensity={100}
         color="white"
    
         />

<spotLight
         position={[4,5,4]}
         angle={0.3}
         penumbra={0.5}
         intensity={40}
         color="#4cc9f0"
    
         />



<spotLight
         position={[-4,5,5]}
         angle={0.4}
         penumbra={1}
         intensity={60}
         color="#9dfedd"
    
         />

    <rectAreaLight
        width={3}
        height={3}
        intensity={55}
        color={"#A259FF"}
        position={[1, 3, 4]}
        rotation-x={-Math.PI / 2}
        />
<pointLight 

position={[0,1,0]}
intensity={10}
color="#7209b7"



/>

<pointLight 

position={[1,2,-2]}
intensity={10}
color="#0d00a4"



/>



        </>
  )
}

export default HeroLights