import React from 'react';
import Header from './components/Header';
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