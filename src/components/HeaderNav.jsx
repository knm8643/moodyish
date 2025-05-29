import React, { useEffect, useRef } from 'react';

function HeaderNav({ currentMonth, setCurrentMonth }) {
    const sliderRef = useRef(null);

    const scrollToCenter = (monthIndex) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const item = slider.children[monthIndex];
        if (!item) return;

        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const containerCenter = slider.offsetWidth / 2;

        slider.scrollTo({
            left: itemCenter - containerCenter,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        scrollToCenter(currentMonth);
    }, [currentMonth]);

    useEffect(() => {
        scrollToCenter(currentMonth);
    }, []);

    return (
        <div className="header">
            <div className="year" id="currentYear">2025</div>
            <div className="purpose-message">
                오늘, 어떤 음식이 제철일까요?<br />
                날짜별로 제철 먹거리를 확인해보세요!
            </div>
            <div className="month-slider-container">
                <button
                    className="slider-nav prev"
                    onClick={() => setCurrentMonth((prev) => (prev - 1 + 12) % 12)}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <div className="month-slider" ref={sliderRef}>
                    {Array.from({ length: 12 }, (_, index) => (
                        <div
                            key={index}
                            className={`month-item ${index === currentMonth ? 'active' : ''}`}
                            onClick={() => setCurrentMonth(index)}
                        >
                            {new Date(0, index).toLocaleString('ko-KR', { month: 'long' })}
                        </div>
                    ))}
                </div>
                <button
                    className="slider-nav next"
                    onClick={() => setCurrentMonth((prev) => (prev + 1) % 12)}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default HeaderNav;