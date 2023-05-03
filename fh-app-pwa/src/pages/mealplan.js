import React from 'react';
import Header from './components/Header';
import MealList from './components/mealplan/MealList';

function mealplan() {
    return (
        <>
            <Header headline={"LBL_CAFE"} subheadline={"Welcome to our"}/>
            <MealList />
        </>
    );
}

export default mealplan;