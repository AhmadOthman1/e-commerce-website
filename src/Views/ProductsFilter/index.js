import React from 'react'
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Filter from "../../components/Filter";
import HeaderIntro from '../../components/HeaderIntro';
import Footer from '../../components/Footer';
const index = () => {
  const logo ="matter";
  const menuItems =[
    "shop",
    "fabric",
    "journal",
    "about"
  ]
  const avatarIcons =[
    {
    d: "M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z",
    viewBox:"0 0 487.95 487.95"
    },
    {
      d: "M16.032,29.247c-0.092,0-0.185-0.035-0.255-0.105L3.008,16.373c-1.507-1.507-2.337-3.506-2.337-5.629c0-2.139,0.83-4.147,2.337-5.655c1.506-1.506,3.508-2.335,5.639-2.337c0,0,0.001,0,0.002,0c2.132,0,4.136,0.83,5.643,2.337l1.74,1.74l1.74-1.74c1.507-1.507,3.511-2.337,5.642-2.337c0.003,0,0.005,0,0.008,0c2.128,0.002,4.129,0.832,5.635,2.337c1.507,1.508,2.337,3.511,2.337,5.642s-0.83,4.134-2.337,5.642L16.287,29.142C16.216,29.212,16.124,29.247,16.032,29.247zM8.649,3.473c0,0-0.001,0-0.002,0C6.709,3.474,4.888,4.229,3.518,5.599C2.147,6.97,1.392,8.797,1.392,10.744c0,1.931,0.755,3.749,2.126,5.119l0,0l12.514,12.514l12.514-12.514c1.371-1.371,2.126-3.193,2.126-5.132s-0.755-3.761-2.126-5.132c-1.37-1.369-3.19-2.124-5.125-2.126c-0.003,0-0.006,0-0.008,0c-1.938,0-3.761,0.754-5.132,2.126l-1.995,1.995c-0.141,0.141-0.369,0.141-0.51,0l-1.995-1.995C12.412,4.228,10.588,3.473,8.649,3.473z",
      viewBox:"0 0 32 32"
    },
    {
      d: "M445.663,469.921l-14.362-359.041C430.968,102.537,424.165,96,415.814,96H351v-0.5C351,42.841,308.159,0,255.5,0S160,42.841,160,95.5V96H95.187c-8.351,0-15.153,6.536-15.488,14.88L65.337,469.921c-0.434,10.842,3.468,21.122,10.985,28.946C83.84,506.691,93.956,511,104.806,511h301.389c10.851,0,20.966-4.309,28.484-12.133C442.195,491.042,446.097,480.763,445.663,469.921z M175,95.5c0-44.388,36.112-80.5,80.5-80.5S336,51.112,336,95.5V96H175V95.5zM423.862,488.474c-4.663,4.853-10.938,7.526-17.667,7.526H104.806c-6.73,0-13.004-2.672-17.667-7.525c-4.663-4.853-7.083-11.229-6.813-17.954L94.687,111.48c0.011-0.27,0.23-0.48,0.5-0.48H160v48.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V111h161v48.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V111h64.814c0.269,0,0.488,0.21,0.499,0.48l14.362,359.041C430.944,477.245,428.524,483.621,423.862,488.474z",
      viewBox:"0 0 511 511"
    }
  ]
  return (
    <>
    <Header title="Free shipping for orders above USD 150"/>
    <Menu logo={logo} Items={menuItems} avatars={avatarIcons}/>
    <HeaderIntro/>
    <Filter/>
    <Footer/>
    </>
  )
}

export default index