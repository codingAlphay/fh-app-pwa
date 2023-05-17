import React from 'react';

// components
import Header from './components/layout/Header';
import MealList from './components/mealplan/MealList';
import Timeline from './components/mealplan/Timeline';

function mealplan() {
    return (
        <>
            <Header headline={"LBL_CAFE"} subheadline={"Welcome to our"}/>
            <Timeline />
            <div className='mb-24'>
                <MealList />
            </div>
        </>
    );
}

export default mealplan;