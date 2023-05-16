import React from 'react';
import {ItemView , ChartBar , PieChart , PieChartRanger } from "../../../components/index";

const  MainDashboard = props => {
    const itemView= ["Order","User","Earning"]
    return (
        <div className='main-dashboard'>
            <div className='d-flex flex-lg-column flex-md-row justify-content-around flex mt-4 mb-3 '>
                 {[...new Array(3)].map((a,i)=><ItemView total={i} key={i}>{itemView[i]} </ItemView>)}

            </div>
            <div className='chart-body d-flex flex-column w-100'>
                    <ChartBar/>
                    <div className='main-pie'>
                        <PieChart/>   
                        <PieChartRanger/>
                    </div>

            </div>
           
        </div>
    );
};

export default MainDashboard;