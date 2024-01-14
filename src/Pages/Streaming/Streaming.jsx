import React from 'react';

import SubHeader from '../../Components/SubHeader';
import subHeaders from '../../Components/SubHeader/SubHeaderLists.json';
import { Overview } from './StreamComponents/Overview';
import { SubBenefits } from './StreamComponents/SubBenefits';
import { Commands } from './StreamComponents/Commands';
import { Schedule } from './StreamComponents/Schedule';
import { GamesHistory } from './StreamComponents/GamesHistory';
import { RecommendedStreamers } from './StreamComponents/ReccommendedStreamers';
import { Clips } from './StreamComponents/Clips';

export const Streaming = ()=>{

    return(
        <div>
            <SubHeader subHeaders={subHeaders.streaming} />
            <div className="streaming-wrapper center-column">
                <p className="page-title">Streaming</p>
                <Overview />
                <SubBenefits />
                <Commands />
                <Schedule />
                <GamesHistory />
                <RecommendedStreamers />
                <Clips />
            </div>
        </div>
    )
}