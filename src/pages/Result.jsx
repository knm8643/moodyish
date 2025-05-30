import React, { useEffect, useState } from 'react';
import { seasonalFoods } from '../data';

function Result({ currentMonth, openModal }) {
    const [days, setDays] = useState([]);
    const [visibleDays, setVisibleDays] = useState([]); // ← 각 day별 show 여부
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const year = new Date().getFullYear();

    useEffect(() => {
        const firstDay = new Date(year, currentMonth, 1).getDay();
        const totalDays = getDaysInMonth(year, currentMonth);
        const calendarDays = Array(firstDay).fill(null).concat([...Array(totalDays).keys()].map(i => i + 1));

        setDays(calendarDays);
        setVisibleDays([]);

        calendarDays.forEach((_, idx) => {
            setTimeout(() => {
                setVisibleDays(prev => [...prev, idx]);
            }, idx * 15);
        });
    }, [currentMonth]);

    const getFoodsForDay = (day) => {
        return seasonalFoods.filter(food => {
            return food.availability.some(period =>
                period.month === (currentMonth + 1) &&
                period.startDay <= day &&
                period.endDay >= day
            );
        });
    };

    return (
        <div className="calendar-section">
            <div className="calendar-grid">
                {daysOfWeek.map((day, idx) => (
                    <div key={idx} className="day-header" style={{ color: day === '일' ? 'red' : day === '토' ? 'blue' : undefined }}>{day}</div>
                ))}
                {days.map((day, idx) => {
                    const isVisible = visibleDays.includes(idx);

                    if (day === null) {
                        return <div key={idx} className="calendar-day empty" />;
                    }

                    const foodsToday = getFoodsForDay(day);
                    const hasFoods = foodsToday.length > 0;

                    return (
                        <div
                            key={idx}
                            className={`calendar-day fade-in ${isVisible ? 'show' : ''} ${hasFoods ? 'has-foods' : ''}`}
                        >
                            <div className="day-number"
                                 onClick={() => openModal(foodsToday, 'list', `${currentMonth + 1}월 ${day}일`)}>
                                {day}
                            </div>
                            {hasFoods && (
                                <div className="food-indicators" title={`외 ${foodsToday.length - 3}개`}>
                                    {foodsToday.slice(0, 3).map((_, i) => (
                                        <div key={i} className="food-dot" />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

export default Result;