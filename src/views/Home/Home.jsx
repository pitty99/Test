import React from "react"
import BannerExample from "../../components/Carousel/Carousel"
import FeatureGame from "../../components/FeatureGame/FeatureGame"
import FeatureJam from "../../components/FeatureJam/FeatureJam"
import Navbar from "../../components/Navbar/Navbar"
import SearchFormInput from "../../components/Search/SearchInput"
import { DATA } from "../../constants/constant"
import './Home.css'

export default function Home (){
    
    return (
        <>
        <div>
            <Navbar></Navbar>
            <div className="search-input-container">
                <SearchFormInput></SearchFormInput>
            </div>
            <BannerExample></BannerExample>
            <div className="feature-container">
                <div>
                    <FeatureJam listJam={DATA.jams}></FeatureJam>
                </div>
                <div>
                    <FeatureGame listGame = {DATA.games[0].data}></FeatureGame>
                </div>
            </div>
            
           
        </div>
        </>
    )
}