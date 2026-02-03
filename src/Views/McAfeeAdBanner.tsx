import '../styles/McAfeeAdBanner.scss'
import warning from '/assets/about/warning.png'
import mcafee from '/assets/about/mcafee.png'
import downArrow from '/assets/about/down-arrow.png';

import { numBetween } from '../helpers'

const MAX_VIRUS = 10000;
const MIN_VIRUS = 100;
const availableMemory = `${numBetween(15, 60)}%`;
const virusCount = numBetween(MIN_VIRUS, MAX_VIRUS);
const internetJunkFiles = numBetween(MIN_VIRUS, virusCount);
const remainingPool = virusCount - internetJunkFiles;
const windowJunkFiles = numBetween(MIN_VIRUS, remainingPool);
const registryIssues = remainingPool - windowJunkFiles;

export const McAfeeAdBanner = (): React.ReactNode => {
    return (
        <div className="mcaffe-ad-banner">
            <div className="warning">
                <div className="img-wrapper">
                    <img src={warning} />
                </div>
                <h2>Your PC is in danger!</h2>
            </div>
            <div className='ad-content'>
                <div className='dashboard'>
                    <h2>Issue Found </h2>
                    <h1> {virusCount}</h1>
                    <div className='repair'>
                        Repair Now
                    </div>
                    <p className='status'>System Status: <span>Poor</span></p>
                </div>
                <div className='scan-results'>
                    <h2> Scan Results </h2>
                    <div className='scanned-item-wrapper'>
                        <div className='scanned-item'>
                            <p>Available Memory</p>
                            <div>
                                <span>{availableMemory}</span>
                                <img src={downArrow}></img>
                            </div>
                        </div>
                        <div className='scanned-item'>
                            <p>Internet junk files</p>
                            <div>
                                <span>{internetJunkFiles}</span>
                                <img src={downArrow}></img>
                            </div>
                        </div>
                        <div className='scanned-item'>
                            <p>Window junk files</p>
                            <div>
                                <span>{windowJunkFiles}</span>
                                <img src={downArrow}></img>
                            </div>
                        </div>
                        <div className='scanned-item'>
                            <p>Registry issues</p>
                            <div>
                                <span>{registryIssues}</span>
                                <img src={downArrow}></img>
                            </div>  
                        </div>
                    </div>
                    <div className='subscription'>
                        <div className='mcafee-subcription'>
                            <img src={mcafee}></img>
                            McRobert
                        </div>
                        <button>Optimize your PC</button>
                    </div>
                </div>
            </div>
        </div>
    )
}