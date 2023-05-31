import React from 'react'
import NavigationBar from './NavigationBar'
import Principal from './principal'

function Main() {
  return (
    <>
       <NavigationBar/>
       
       <Principal images={['https://lukas.com.mx/wp-content/uploads/2019/12/LUKAS_fotos_juegos.jpg', 'https://www.happyplanet.com.mx/assets/img/banner_hp_promo.png', 'https://salonplayrubert.com/wp-content/uploads/2017/06/panoramico-1024x329.jpg']}/>
    </>
  )
}

export default Main
