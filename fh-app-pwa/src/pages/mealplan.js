import React from 'react';

// components
import Header from './components/layout/Header';
import MealList from './components/meal-plan/MealList';
import Timeline from './components/meal-plan/Timeline';

function mealplan() {
    return (
        <>
            <Header headline={"LBL_CAFE"} subheadline={"Welcome to our"}/>
            <Timeline />
            <MealList />
        </>
    );
}

export default mealplan;